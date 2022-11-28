import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SymptomSymptomTypeEnum {
    SymptomTypeUnspecified = "SYMPTOM_TYPE_UNSPECIFIED",
    LowMemory = "LOW_MEMORY",
    OutOfMemory = "OUT_OF_MEMORY",
    ExecuteTimedOut = "EXECUTE_TIMED_OUT",
    MeshBuildFail = "MESH_BUILD_FAIL",
    HbmOutOfMemory = "HBM_OUT_OF_MEMORY",
    ProjectAbuse = "PROJECT_ABUSE"
}


// Symptom
/** 
 * A Symptom instance.
**/
export class Symptom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=symptomType" })
  symptomType?: SymptomSymptomTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
