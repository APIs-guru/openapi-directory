import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AmpIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}


// AmpIssue
/** 
 * AMP issue.
**/
export class AmpIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueMessage" })
  issueMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: AmpIssueSeverityEnum;
}
