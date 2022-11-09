import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IndexStatusInspectionResultCrawledAsEnum {
    CrawlingUserAgentUnspecified = "CRAWLING_USER_AGENT_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}
export declare enum IndexStatusInspectionResultIndexingStateEnum {
    IndexingStateUnspecified = "INDEXING_STATE_UNSPECIFIED",
    IndexingAllowed = "INDEXING_ALLOWED",
    BlockedByMetaTag = "BLOCKED_BY_META_TAG",
    BlockedByHttpHeader = "BLOCKED_BY_HTTP_HEADER",
    BlockedByRobotsTxt = "BLOCKED_BY_ROBOTS_TXT"
}
export declare enum IndexStatusInspectionResultPageFetchStateEnum {
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
export declare enum IndexStatusInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED",
    Allowed = "ALLOWED",
    Disallowed = "DISALLOWED"
}
export declare enum IndexStatusInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
**/
export declare class IndexStatusInspectionResult extends SpeakeasyBase {
    coverageState?: string;
    crawledAs?: IndexStatusInspectionResultCrawledAsEnum;
    googleCanonical?: string;
    indexingState?: IndexStatusInspectionResultIndexingStateEnum;
    lastCrawlTime?: string;
    pageFetchState?: IndexStatusInspectionResultPageFetchStateEnum;
    referringUrls?: string[];
    robotsTxtState?: IndexStatusInspectionResultRobotsTxtStateEnum;
    sitemap?: string[];
    userCanonical?: string;
    verdict?: IndexStatusInspectionResultVerdictEnum;
}
