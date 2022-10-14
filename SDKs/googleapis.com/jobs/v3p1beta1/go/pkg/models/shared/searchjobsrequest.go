package shared

type SearchJobsRequestDiversificationLevelEnum string

const (
	SearchJobsRequestDiversificationLevelEnumDiversificationLevelUnspecified SearchJobsRequestDiversificationLevelEnum = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
	SearchJobsRequestDiversificationLevelEnumDisabled                        SearchJobsRequestDiversificationLevelEnum = "DISABLED"
	SearchJobsRequestDiversificationLevelEnumSimple                          SearchJobsRequestDiversificationLevelEnum = "SIMPLE"
)

type SearchJobsRequestJobViewEnum string

const (
	SearchJobsRequestJobViewEnumJobViewUnspecified SearchJobsRequestJobViewEnum = "JOB_VIEW_UNSPECIFIED"
	SearchJobsRequestJobViewEnumJobViewIDOnly      SearchJobsRequestJobViewEnum = "JOB_VIEW_ID_ONLY"
	SearchJobsRequestJobViewEnumJobViewMinimal     SearchJobsRequestJobViewEnum = "JOB_VIEW_MINIMAL"
	SearchJobsRequestJobViewEnumJobViewSmall       SearchJobsRequestJobViewEnum = "JOB_VIEW_SMALL"
	SearchJobsRequestJobViewEnumJobViewFull        SearchJobsRequestJobViewEnum = "JOB_VIEW_FULL"
)

type SearchJobsRequestSearchModeEnum string

const (
	SearchJobsRequestSearchModeEnumSearchModeUnspecified SearchJobsRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	SearchJobsRequestSearchModeEnumJobSearch             SearchJobsRequestSearchModeEnum = "JOB_SEARCH"
	SearchJobsRequestSearchModeEnumFeaturedJobSearch     SearchJobsRequestSearchModeEnum = "FEATURED_JOB_SEARCH"
)

type SearchJobsRequest struct {
	CustomRankingInfo        *CustomRankingInfo                         `json:"customRankingInfo,omitempty"`
	DisableKeywordMatch      *bool                                      `json:"disableKeywordMatch,omitempty"`
	DiversificationLevel     *SearchJobsRequestDiversificationLevelEnum `json:"diversificationLevel,omitempty"`
	EnableBroadening         *bool                                      `json:"enableBroadening,omitempty"`
	HistogramFacets          *HistogramFacets                           `json:"histogramFacets,omitempty"`
	HistogramQueries         []HistogramQuery                           `json:"histogramQueries,omitempty"`
	JobQuery                 *JobQuery                                  `json:"jobQuery,omitempty"`
	JobView                  *SearchJobsRequestJobViewEnum              `json:"jobView,omitempty"`
	Offset                   *int32                                     `json:"offset,omitempty"`
	OrderBy                  *string                                    `json:"orderBy,omitempty"`
	PageSize                 *int32                                     `json:"pageSize,omitempty"`
	PageToken                *string                                    `json:"pageToken,omitempty"`
	RequestMetadata          *RequestMetadata                           `json:"requestMetadata,omitempty"`
	RequirePreciseResultSize *bool                                      `json:"requirePreciseResultSize,omitempty"`
	SearchMode               *SearchJobsRequestSearchModeEnum           `json:"searchMode,omitempty"`
}
