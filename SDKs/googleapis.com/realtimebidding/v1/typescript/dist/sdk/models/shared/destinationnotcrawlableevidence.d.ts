import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DestinationNotCrawlableEvidenceReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    UnreachableRobots = "UNREACHABLE_ROBOTS",
    TimeoutRobots = "TIMEOUT_ROBOTS",
    RobotedDenied = "ROBOTED_DENIED",
    Unknown = "UNKNOWN"
}
/**
 * Evidence that the creative's destination URL was not crawlable by Google.
**/
export declare class DestinationNotCrawlableEvidence extends SpeakeasyBase {
    crawlTime?: string;
    crawledUrl?: string;
    reason?: DestinationNotCrawlableEvidenceReasonEnum;
}
