import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SymptomSymptomTypeEnum {
    SymptomTypeUnspecified = "SYMPTOM_TYPE_UNSPECIFIED",
    LowMemory = "LOW_MEMORY",
    OutOfMemory = "OUT_OF_MEMORY",
    ExecuteTimedOut = "EXECUTE_TIMED_OUT",
    MeshBuildFail = "MESH_BUILD_FAIL",
    HbmOutOfMemory = "HBM_OUT_OF_MEMORY",
    ProjectAbuse = "PROJECT_ABUSE"
}
/**
 * A Symptom instance.
**/
export declare class Symptom extends SpeakeasyBase {
    createTime?: string;
    details?: string;
    symptomType?: SymptomSymptomTypeEnum;
    workerId?: string;
}
