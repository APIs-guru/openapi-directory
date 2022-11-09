import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RichResultsIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Severity and status of a single issue affecting a single rich result instance on a page.
**/
export declare class RichResultsIssue extends SpeakeasyBase {
    issueMessage?: string;
    severity?: RichResultsIssueSeverityEnum;
}
