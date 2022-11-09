import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RichResultsIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// RichResultsIssue
/** 
 * Severity and status of a single issue affecting a single rich result instance on a page.
**/
export class RichResultsIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueMessage" })
  issueMessage?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: RichResultsIssueSeverityEnum;
}
