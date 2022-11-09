import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourcePosition } from "./sourceposition";

export enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Deprecation = "DEPRECATION"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// Issue
/** 
 * Issues include warnings, errors, and deprecation notices.
**/
export class Issue extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: IssueSeverityEnum;

  @Metadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;
}
