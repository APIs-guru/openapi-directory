import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IssueResolutionEnum {
    ResolutionUnspecified = "RESOLUTION_UNSPECIFIED",
    UserAction = "USER_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}
export declare enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * Product issue.
**/
export declare class Issue extends SpeakeasyBase {
    attribute?: string;
    description?: string;
    destination?: string;
    resolution?: IssueResolutionEnum;
    severity?: IssueSeverityEnum;
    timestamp?: string;
    title?: string;
    type?: string;
}
