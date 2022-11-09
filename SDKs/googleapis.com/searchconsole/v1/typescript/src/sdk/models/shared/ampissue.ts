import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AmpIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// AmpIssue
/** 
 * AMP issue.
**/
export class AmpIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueMessage" })
  issueMessage?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: AmpIssueSeverityEnum;
}
