import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceMeshType } from "./servicemeshtype";

export enum ServiceMeshAnalysisMessageBaseLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}


// ServiceMeshAnalysisMessageBase
/** 
 * AnalysisMessageBase describes some common information that is needed for all messages.
**/
export class ServiceMeshAnalysisMessageBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=level" })
  level?: ServiceMeshAnalysisMessageBaseLevelEnum;

  @Metadata({ data: "json, name=type" })
  type?: ServiceMeshType;
}
