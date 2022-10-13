package shared

type AmpInspectionResultAmpIndexStatusVerdictEnum string

const (
	AmpInspectionResultAmpIndexStatusVerdictEnumVerdictUnspecified AmpInspectionResultAmpIndexStatusVerdictEnum = "VERDICT_UNSPECIFIED"
	AmpInspectionResultAmpIndexStatusVerdictEnumPass               AmpInspectionResultAmpIndexStatusVerdictEnum = "PASS"
	AmpInspectionResultAmpIndexStatusVerdictEnumPartial            AmpInspectionResultAmpIndexStatusVerdictEnum = "PARTIAL"
	AmpInspectionResultAmpIndexStatusVerdictEnumFail               AmpInspectionResultAmpIndexStatusVerdictEnum = "FAIL"
	AmpInspectionResultAmpIndexStatusVerdictEnumNeutral            AmpInspectionResultAmpIndexStatusVerdictEnum = "NEUTRAL"
)

type AmpInspectionResultIndexingStateEnum string

const (
	AmpInspectionResultIndexingStateEnumAmpIndexingStateUnspecified         AmpInspectionResultIndexingStateEnum = "AMP_INDEXING_STATE_UNSPECIFIED"
	AmpInspectionResultIndexingStateEnumAmpIndexingAllowed                  AmpInspectionResultIndexingStateEnum = "AMP_INDEXING_ALLOWED"
	AmpInspectionResultIndexingStateEnumBlockedDueToNoindex                 AmpInspectionResultIndexingStateEnum = "BLOCKED_DUE_TO_NOINDEX"
	AmpInspectionResultIndexingStateEnumBlockedDueToExpiredUnavailableAfter AmpInspectionResultIndexingStateEnum = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"
)

type AmpInspectionResultPageFetchStateEnum string

const (
	AmpInspectionResultPageFetchStateEnumPageFetchStateUnspecified AmpInspectionResultPageFetchStateEnum = "PAGE_FETCH_STATE_UNSPECIFIED"
	AmpInspectionResultPageFetchStateEnumSuccessful                AmpInspectionResultPageFetchStateEnum = "SUCCESSFUL"
	AmpInspectionResultPageFetchStateEnumSoft404                   AmpInspectionResultPageFetchStateEnum = "SOFT_404"
	AmpInspectionResultPageFetchStateEnumBlockedRobotsTxt          AmpInspectionResultPageFetchStateEnum = "BLOCKED_ROBOTS_TXT"
	AmpInspectionResultPageFetchStateEnumNotFound                  AmpInspectionResultPageFetchStateEnum = "NOT_FOUND"
	AmpInspectionResultPageFetchStateEnumAccessDenied              AmpInspectionResultPageFetchStateEnum = "ACCESS_DENIED"
	AmpInspectionResultPageFetchStateEnumServerError               AmpInspectionResultPageFetchStateEnum = "SERVER_ERROR"
	AmpInspectionResultPageFetchStateEnumRedirectError             AmpInspectionResultPageFetchStateEnum = "REDIRECT_ERROR"
	AmpInspectionResultPageFetchStateEnumAccessForbidden           AmpInspectionResultPageFetchStateEnum = "ACCESS_FORBIDDEN"
	AmpInspectionResultPageFetchStateEnumBlocked4Xx                AmpInspectionResultPageFetchStateEnum = "BLOCKED_4XX"
	AmpInspectionResultPageFetchStateEnumInternalCrawlError        AmpInspectionResultPageFetchStateEnum = "INTERNAL_CRAWL_ERROR"
	AmpInspectionResultPageFetchStateEnumInvalidURL                AmpInspectionResultPageFetchStateEnum = "INVALID_URL"
)

type AmpInspectionResultRobotsTxtStateEnum string

const (
	AmpInspectionResultRobotsTxtStateEnumRobotsTxtStateUnspecified AmpInspectionResultRobotsTxtStateEnum = "ROBOTS_TXT_STATE_UNSPECIFIED"
	AmpInspectionResultRobotsTxtStateEnumAllowed                   AmpInspectionResultRobotsTxtStateEnum = "ALLOWED"
	AmpInspectionResultRobotsTxtStateEnumDisallowed                AmpInspectionResultRobotsTxtStateEnum = "DISALLOWED"
)

type AmpInspectionResultVerdictEnum string

const (
	AmpInspectionResultVerdictEnumVerdictUnspecified AmpInspectionResultVerdictEnum = "VERDICT_UNSPECIFIED"
	AmpInspectionResultVerdictEnumPass               AmpInspectionResultVerdictEnum = "PASS"
	AmpInspectionResultVerdictEnumPartial            AmpInspectionResultVerdictEnum = "PARTIAL"
	AmpInspectionResultVerdictEnumFail               AmpInspectionResultVerdictEnum = "FAIL"
	AmpInspectionResultVerdictEnumNeutral            AmpInspectionResultVerdictEnum = "NEUTRAL"
)

type AmpInspectionResult struct {
	AmpIndexStatusVerdict *AmpInspectionResultAmpIndexStatusVerdictEnum `json:"ampIndexStatusVerdict"`
	AmpURL                *string                                       `json:"ampUrl"`
	IndexingState         *AmpInspectionResultIndexingStateEnum         `json:"indexingState"`
	Issues                []AmpIssue                                    `json:"issues"`
	LastCrawlTime         *string                                       `json:"lastCrawlTime"`
	PageFetchState        *AmpInspectionResultPageFetchStateEnum        `json:"pageFetchState"`
	RobotsTxtState        *AmpInspectionResultRobotsTxtStateEnum        `json:"robotsTxtState"`
	Verdict               *AmpInspectionResultVerdictEnum               `json:"verdict"`
}
