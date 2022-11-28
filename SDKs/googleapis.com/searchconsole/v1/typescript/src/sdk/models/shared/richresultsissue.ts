import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RichResultsIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}


// RichResultsIssue
/** 
 * Severity and status of a single issue affecting a single rich result instance on a page.
**/
export class RichResultsIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueMessage" })
  issueMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: RichResultsIssueSeverityEnum;
}
