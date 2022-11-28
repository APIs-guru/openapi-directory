import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshType } from "./servicemeshtype";
export declare enum ServiceMeshAnalysisMessageBaseLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * AnalysisMessageBase describes some common information that is needed for all messages.
**/
export declare class ServiceMeshAnalysisMessageBase extends SpeakeasyBase {
    documentationUrl?: string;
    level?: ServiceMeshAnalysisMessageBaseLevelEnum;
    type?: ServiceMeshType;
}
