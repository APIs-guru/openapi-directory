package shared

type SearchJobsRequestDiversificationLevelEnum string

const (
	SearchJobsRequestDiversificationLevelEnumDiversificationLevelUnspecified SearchJobsRequestDiversificationLevelEnum = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
	SearchJobsRequestDiversificationLevelEnumDisabled                        SearchJobsRequestDiversificationLevelEnum = "DISABLED"
	SearchJobsRequestDiversificationLevelEnumSimple                          SearchJobsRequestDiversificationLevelEnum = "SIMPLE"
	SearchJobsRequestDiversificationLevelEnumOnePerCompany                   SearchJobsRequestDiversificationLevelEnum = "ONE_PER_COMPANY"
	SearchJobsRequestDiversificationLevelEnumTwoPerCompany                   SearchJobsRequestDiversificationLevelEnum = "TWO_PER_COMPANY"
	SearchJobsRequestDiversificationLevelEnumDiversifyByLooserSimilarity     SearchJobsRequestDiversificationLevelEnum = "DIVERSIFY_BY_LOOSER_SIMILARITY"
)

type SearchJobsRequestJobViewEnum string

const (
	SearchJobsRequestJobViewEnumJobViewUnspecified SearchJobsRequestJobViewEnum = "JOB_VIEW_UNSPECIFIED"
	SearchJobsRequestJobViewEnumJobViewIDOnly      SearchJobsRequestJobViewEnum = "JOB_VIEW_ID_ONLY"
	SearchJobsRequestJobViewEnumJobViewMinimal     SearchJobsRequestJobViewEnum = "JOB_VIEW_MINIMAL"
	SearchJobsRequestJobViewEnumJobViewSmall       SearchJobsRequestJobViewEnum = "JOB_VIEW_SMALL"
	SearchJobsRequestJobViewEnumJobViewFull        SearchJobsRequestJobViewEnum = "JOB_VIEW_FULL"
)

type SearchJobsRequestKeywordMatchModeEnum string

const (
	SearchJobsRequestKeywordMatchModeEnumKeywordMatchModeUnspecified SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_MODE_UNSPECIFIED"
	SearchJobsRequestKeywordMatchModeEnumKeywordMatchDisabled        SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_DISABLED"
	SearchJobsRequestKeywordMatchModeEnumKeywordMatchAll             SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_ALL"
	SearchJobsRequestKeywordMatchModeEnumKeywordMatchTitleOnly       SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_TITLE_ONLY"
)

type SearchJobsRequestSearchModeEnum string

const (
	SearchJobsRequestSearchModeEnumSearchModeUnspecified SearchJobsRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	SearchJobsRequestSearchModeEnumJobSearch             SearchJobsRequestSearchModeEnum = "JOB_SEARCH"
	SearchJobsRequestSearchModeEnumFeaturedJobSearch     SearchJobsRequestSearchModeEnum = "FEATURED_JOB_SEARCH"
)

type SearchJobsRequest struct {
	CustomRankingInfo    *CustomRankingInfo                         `json:"customRankingInfo"`
	DisableKeywordMatch  *bool                                      `json:"disableKeywordMatch"`
	DiversificationLevel *SearchJobsRequestDiversificationLevelEnum `json:"diversificationLevel"`
	EnableBroadening     *bool                                      `json:"enableBroadening"`
	HistogramQueries     []HistogramQuery                           `json:"histogramQueries"`
	JobQuery             *JobQuery                                  `json:"jobQuery"`
	JobView              *SearchJobsRequestJobViewEnum              `json:"jobView"`
	KeywordMatchMode     *SearchJobsRequestKeywordMatchModeEnum     `json:"keywordMatchMode"`
	MaxPageSize          *int32                                     `json:"maxPageSize"`
	Offset               *int32                                     `json:"offset"`
	OrderBy              *string                                    `json:"orderBy"`
	PageToken            *string                                    `json:"pageToken"`
	RequestMetadata      *RequestMetadata                           `json:"requestMetadata"`
	SearchMode           *SearchJobsRequestSearchModeEnum           `json:"searchMode"`
}
