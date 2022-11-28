import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IndexStatusInspectionResultCrawledAsEnum {
    CrawlingUserAgentUnspecified = "CRAWLING_USER_AGENT_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}

export enum IndexStatusInspectionResultIndexingStateEnum {
    IndexingStateUnspecified = "INDEXING_STATE_UNSPECIFIED",
    IndexingAllowed = "INDEXING_ALLOWED",
    BlockedByMetaTag = "BLOCKED_BY_META_TAG",
    BlockedByHttpHeader = "BLOCKED_BY_HTTP_HEADER",
    BlockedByRobotsTxt = "BLOCKED_BY_ROBOTS_TXT"
}

export enum IndexStatusInspectionResultPageFetchStateEnum {
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

export enum IndexStatusInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED",
    Allowed = "ALLOWED",
    Disallowed = "DISALLOWED"
}

export enum IndexStatusInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}


// IndexStatusInspectionResult
/** 
 * Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
**/
export class IndexStatusInspectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageState" })
  coverageState?: string;

  @SpeakeasyMetadata({ data: "json, name=crawledAs" })
  crawledAs?: IndexStatusInspectionResultCrawledAsEnum;

  @SpeakeasyMetadata({ data: "json, name=googleCanonical" })
  googleCanonical?: string;

  @SpeakeasyMetadata({ data: "json, name=indexingState" })
  indexingState?: IndexStatusInspectionResultIndexingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=lastCrawlTime" })
  lastCrawlTime?: string;

  @SpeakeasyMetadata({ data: "json, name=pageFetchState" })
  pageFetchState?: IndexStatusInspectionResultPageFetchStateEnum;

  @SpeakeasyMetadata({ data: "json, name=referringUrls" })
  referringUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=robotsTxtState" })
  robotsTxtState?: IndexStatusInspectionResultRobotsTxtStateEnum;

  @SpeakeasyMetadata({ data: "json, name=sitemap" })
  sitemap?: string[];

  @SpeakeasyMetadata({ data: "json, name=userCanonical" })
  userCanonical?: string;

  @SpeakeasyMetadata({ data: "json, name=verdict" })
  verdict?: IndexStatusInspectionResultVerdictEnum;
}
