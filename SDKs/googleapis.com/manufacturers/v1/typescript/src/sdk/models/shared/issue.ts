import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IssueResolutionEnum {
    ResolutionUnspecified = "RESOLUTION_UNSPECIFIED",
    UserAction = "USER_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}

export enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}


// Issue
/** 
 * Product issue.
**/
export class Issue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: IssueResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: IssueSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
