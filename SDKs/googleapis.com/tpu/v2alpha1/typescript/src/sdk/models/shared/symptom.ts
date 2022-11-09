import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SymptomSymptomTypeEnum {
    SymptomTypeUnspecified = "SYMPTOM_TYPE_UNSPECIFIED"
,    LowMemory = "LOW_MEMORY"
,    OutOfMemory = "OUT_OF_MEMORY"
,    ExecuteTimedOut = "EXECUTE_TIMED_OUT"
,    MeshBuildFail = "MESH_BUILD_FAIL"
,    HbmOutOfMemory = "HBM_OUT_OF_MEMORY"
,    ProjectAbuse = "PROJECT_ABUSE"
}


// Symptom
/** 
 * A Symptom instance.
**/
export class Symptom extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=symptomType" })
  symptomType?: SymptomSymptomTypeEnum;

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
