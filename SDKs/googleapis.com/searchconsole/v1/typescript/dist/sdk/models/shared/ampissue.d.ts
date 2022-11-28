import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AmpIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * AMP issue.
**/
export declare class AmpIssue extends SpeakeasyBase {
    issueMessage?: string;
    severity?: AmpIssueSeverityEnum;
}
