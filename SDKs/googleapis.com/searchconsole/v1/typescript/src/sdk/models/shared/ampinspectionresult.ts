import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AmpIssue } from "./ampissue";

export enum AmpInspectionResultAmpIndexStatusVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED"
,    Pass = "PASS"
,    Partial = "PARTIAL"
,    Fail = "FAIL"
,    Neutral = "NEUTRAL"
}

export enum AmpInspectionResultIndexingStateEnum {
    AmpIndexingStateUnspecified = "AMP_INDEXING_STATE_UNSPECIFIED"
,    AmpIndexingAllowed = "AMP_INDEXING_ALLOWED"
,    BlockedDueToNoindex = "BLOCKED_DUE_TO_NOINDEX"
,    BlockedDueToExpiredUnavailableAfter = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"
}

export enum AmpInspectionResultPageFetchStateEnum {
    PageFetchStateUnspecified = "PAGE_FETCH_STATE_UNSPECIFIED"
,    Successful = "SUCCESSFUL"
,    Soft404 = "SOFT_404"
,    BlockedRobotsTxt = "BLOCKED_ROBOTS_TXT"
,    NotFound = "NOT_FOUND"
,    AccessDenied = "ACCESS_DENIED"
,    ServerError = "SERVER_ERROR"
,    RedirectError = "REDIRECT_ERROR"
,    AccessForbidden = "ACCESS_FORBIDDEN"
,    Blocked4Xx = "BLOCKED_4XX"
,    InternalCrawlError = "INTERNAL_CRAWL_ERROR"
,    InvalidUrl = "INVALID_URL"
}

export enum AmpInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED"
,    Allowed = "ALLOWED"
,    Disallowed = "DISALLOWED"
}

export enum AmpInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED"
,    Pass = "PASS"
,    Partial = "PARTIAL"
,    Fail = "FAIL"
,    Neutral = "NEUTRAL"
}


// AmpInspectionResult
/** 
 * AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
**/
export class AmpInspectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ampIndexStatusVerdict" })
  ampIndexStatusVerdict?: AmpInspectionResultAmpIndexStatusVerdictEnum;

  @Metadata({ data: "json, name=ampUrl" })
  ampUrl?: string;

  @Metadata({ data: "json, name=indexingState" })
  indexingState?: AmpInspectionResultIndexingStateEnum;

  @Metadata({ data: "json, name=issues", elemType: shared.AmpIssue })
  issues?: AmpIssue[];

  @Metadata({ data: "json, name=lastCrawlTime" })
  lastCrawlTime?: string;

  @Metadata({ data: "json, name=pageFetchState" })
  pageFetchState?: AmpInspectionResultPageFetchStateEnum;

  @Metadata({ data: "json, name=robotsTxtState" })
  robotsTxtState?: AmpInspectionResultRobotsTxtStateEnum;

  @Metadata({ data: "json, name=verdict" })
  verdict?: AmpInspectionResultVerdictEnum;
}
