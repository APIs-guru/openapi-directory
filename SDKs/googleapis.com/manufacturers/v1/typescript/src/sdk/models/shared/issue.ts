import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IssueResolutionEnum {
    ResolutionUnspecified = "RESOLUTION_UNSPECIFIED"
,    UserAction = "USER_ACTION"
,    PendingProcessing = "PENDING_PROCESSING"
}

export enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}


// Issue
/** 
 * Product issue.
**/
export class Issue extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: IssueResolutionEnum;

  @Metadata({ data: "json, name=severity" })
  severity?: IssueSeverityEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
