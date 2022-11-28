import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";


export enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Deprecation = "DEPRECATION",
    Warning = "WARNING",
    Error = "ERROR"
}


// Issue
/** 
 * Issues include warnings, errors, and deprecation notices.
**/
export class Issue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: IssueSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;
}
