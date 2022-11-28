import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshType } from "./servicemeshtype";


export enum ServiceMeshAnalysisMessageBaseLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}


// ServiceMeshAnalysisMessageBase
/** 
 * AnalysisMessageBase describes some common information that is needed for all messages.
**/
export class ServiceMeshAnalysisMessageBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: ServiceMeshAnalysisMessageBaseLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ServiceMeshType;
}
