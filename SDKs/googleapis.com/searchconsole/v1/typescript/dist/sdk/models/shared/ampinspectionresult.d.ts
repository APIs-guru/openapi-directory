import { SpeakeasyBase } from "../../../internal/utils";
import { AmpIssue } from "./ampissue";
export declare enum AmpInspectionResultAmpIndexStatusVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
export declare enum AmpInspectionResultIndexingStateEnum {
    AmpIndexingStateUnspecified = "AMP_INDEXING_STATE_UNSPECIFIED",
    AmpIndexingAllowed = "AMP_INDEXING_ALLOWED",
    BlockedDueToNoindex = "BLOCKED_DUE_TO_NOINDEX",
    BlockedDueToExpiredUnavailableAfter = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"
}
export declare enum AmpInspectionResultPageFetchStateEnum {
    PageFetchStateUnspecified = "PAGE_FETCH_STATE_UNSPECIFIED",
    Successful = "SUCCESSFUL",
    Soft404 = "SOFT_404",
    BlockedRobotsTxt = "BLOCKED_ROBOTS_TXT",
    NotFound = "NOT_FOUND",
    AccessDenied = "ACCESS_DENIED",
    ServerError = "SERVER_ERROR",
    RedirectError = "REDIRECT_ERROR",
    AccessForbidden = "ACCESS_FORBIDDEN",
    Blocked4Xx = "BLOCKED_4XX",
    InternalCrawlError = "INTERNAL_CRAWL_ERROR",
    InvalidUrl = "INVALID_URL"
}
export declare enum AmpInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED",
    Allowed = "ALLOWED",
    Disallowed = "DISALLOWED"
}
export declare enum AmpInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
**/
export declare class AmpInspectionResult extends SpeakeasyBase {
    ampIndexStatusVerdict?: AmpInspectionResultAmpIndexStatusVerdictEnum;
    ampUrl?: string;
    indexingState?: AmpInspectionResultIndexingStateEnum;
    issues?: AmpIssue[];
    lastCrawlTime?: string;
    pageFetchState?: AmpInspectionResultPageFetchStateEnum;
    robotsTxtState?: AmpInspectionResultRobotsTxtStateEnum;
    verdict?: AmpInspectionResultVerdictEnum;
}
