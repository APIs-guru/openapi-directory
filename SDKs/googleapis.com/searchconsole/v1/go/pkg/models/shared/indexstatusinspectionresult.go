package shared

type IndexStatusInspectionResultCrawledAsEnum string

const (
	IndexStatusInspectionResultCrawledAsEnumCrawlingUserAgentUnspecified IndexStatusInspectionResultCrawledAsEnum = "CRAWLING_USER_AGENT_UNSPECIFIED"
	IndexStatusInspectionResultCrawledAsEnumDesktop                      IndexStatusInspectionResultCrawledAsEnum = "DESKTOP"
	IndexStatusInspectionResultCrawledAsEnumMobile                       IndexStatusInspectionResultCrawledAsEnum = "MOBILE"
)

type IndexStatusInspectionResultIndexingStateEnum string

const (
	IndexStatusInspectionResultIndexingStateEnumIndexingStateUnspecified IndexStatusInspectionResultIndexingStateEnum = "INDEXING_STATE_UNSPECIFIED"
	IndexStatusInspectionResultIndexingStateEnumIndexingAllowed          IndexStatusInspectionResultIndexingStateEnum = "INDEXING_ALLOWED"
	IndexStatusInspectionResultIndexingStateEnumBlockedByMetaTag         IndexStatusInspectionResultIndexingStateEnum = "BLOCKED_BY_META_TAG"
	IndexStatusInspectionResultIndexingStateEnumBlockedByHTTPHeader      IndexStatusInspectionResultIndexingStateEnum = "BLOCKED_BY_HTTP_HEADER"
	IndexStatusInspectionResultIndexingStateEnumBlockedByRobotsTxt       IndexStatusInspectionResultIndexingStateEnum = "BLOCKED_BY_ROBOTS_TXT"
)

type IndexStatusInspectionResultPageFetchStateEnum string

const (
	IndexStatusInspectionResultPageFetchStateEnumPageFetchStateUnspecified IndexStatusInspectionResultPageFetchStateEnum = "PAGE_FETCH_STATE_UNSPECIFIED"
	IndexStatusInspectionResultPageFetchStateEnumSuccessful                IndexStatusInspectionResultPageFetchStateEnum = "SUCCESSFUL"
	IndexStatusInspectionResultPageFetchStateEnumSoft404                   IndexStatusInspectionResultPageFetchStateEnum = "SOFT_404"
	IndexStatusInspectionResultPageFetchStateEnumBlockedRobotsTxt          IndexStatusInspectionResultPageFetchStateEnum = "BLOCKED_ROBOTS_TXT"
	IndexStatusInspectionResultPageFetchStateEnumNotFound                  IndexStatusInspectionResultPageFetchStateEnum = "NOT_FOUND"
	IndexStatusInspectionResultPageFetchStateEnumAccessDenied              IndexStatusInspectionResultPageFetchStateEnum = "ACCESS_DENIED"
	IndexStatusInspectionResultPageFetchStateEnumServerError               IndexStatusInspectionResultPageFetchStateEnum = "SERVER_ERROR"
	IndexStatusInspectionResultPageFetchStateEnumRedirectError             IndexStatusInspectionResultPageFetchStateEnum = "REDIRECT_ERROR"
	IndexStatusInspectionResultPageFetchStateEnumAccessForbidden           IndexStatusInspectionResultPageFetchStateEnum = "ACCESS_FORBIDDEN"
	IndexStatusInspectionResultPageFetchStateEnumBlocked4Xx                IndexStatusInspectionResultPageFetchStateEnum = "BLOCKED_4XX"
	IndexStatusInspectionResultPageFetchStateEnumInternalCrawlError        IndexStatusInspectionResultPageFetchStateEnum = "INTERNAL_CRAWL_ERROR"
	IndexStatusInspectionResultPageFetchStateEnumInvalidURL                IndexStatusInspectionResultPageFetchStateEnum = "INVALID_URL"
)

type IndexStatusInspectionResultRobotsTxtStateEnum string

const (
	IndexStatusInspectionResultRobotsTxtStateEnumRobotsTxtStateUnspecified IndexStatusInspectionResultRobotsTxtStateEnum = "ROBOTS_TXT_STATE_UNSPECIFIED"
	IndexStatusInspectionResultRobotsTxtStateEnumAllowed                   IndexStatusInspectionResultRobotsTxtStateEnum = "ALLOWED"
	IndexStatusInspectionResultRobotsTxtStateEnumDisallowed                IndexStatusInspectionResultRobotsTxtStateEnum = "DISALLOWED"
)

type IndexStatusInspectionResultVerdictEnum string

const (
	IndexStatusInspectionResultVerdictEnumVerdictUnspecified IndexStatusInspectionResultVerdictEnum = "VERDICT_UNSPECIFIED"
	IndexStatusInspectionResultVerdictEnumPass               IndexStatusInspectionResultVerdictEnum = "PASS"
	IndexStatusInspectionResultVerdictEnumPartial            IndexStatusInspectionResultVerdictEnum = "PARTIAL"
	IndexStatusInspectionResultVerdictEnumFail               IndexStatusInspectionResultVerdictEnum = "FAIL"
	IndexStatusInspectionResultVerdictEnumNeutral            IndexStatusInspectionResultVerdictEnum = "NEUTRAL"
)

type IndexStatusInspectionResult struct {
	CoverageState   *string                                        `json:"coverageState,omitempty"`
	CrawledAs       *IndexStatusInspectionResultCrawledAsEnum      `json:"crawledAs,omitempty"`
	GoogleCanonical *string                                        `json:"googleCanonical,omitempty"`
	IndexingState   *IndexStatusInspectionResultIndexingStateEnum  `json:"indexingState,omitempty"`
	LastCrawlTime   *string                                        `json:"lastCrawlTime,omitempty"`
	PageFetchState  *IndexStatusInspectionResultPageFetchStateEnum `json:"pageFetchState,omitempty"`
	ReferringUrls   []string                                       `json:"referringUrls,omitempty"`
	RobotsTxtState  *IndexStatusInspectionResultRobotsTxtStateEnum `json:"robotsTxtState,omitempty"`
	Sitemap         []string                                       `json:"sitemap,omitempty"`
	UserCanonical   *string                                        `json:"userCanonical,omitempty"`
	Verdict         *IndexStatusInspectionResultVerdictEnum        `json:"verdict,omitempty"`
}
