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
	CustomRankingInfo        *CustomRankingInfo                         `json:"customRankingInfo"`
	DisableKeywordMatch      *bool                                      `json:"disableKeywordMatch"`
	DiversificationLevel     *SearchJobsRequestDiversificationLevelEnum `json:"diversificationLevel"`
	EnableBroadening         *bool                                      `json:"enableBroadening"`
	HistogramFacets          *HistogramFacets                           `json:"histogramFacets"`
	HistogramQueries         []HistogramQuery                           `json:"histogramQueries"`
	JobQuery                 *JobQuery                                  `json:"jobQuery"`
	JobView                  *SearchJobsRequestJobViewEnum              `json:"jobView"`
	Offset                   *int32                                     `json:"offset"`
	OrderBy                  *string                                    `json:"orderBy"`
	PageSize                 *int32                                     `json:"pageSize"`
	PageToken                *string                                    `json:"pageToken"`
	RequestMetadata          *RequestMetadata                           `json:"requestMetadata"`
	RequirePreciseResultSize *bool                                      `json:"requirePreciseResultSize"`
	SearchMode               *SearchJobsRequestSearchModeEnum           `json:"searchMode"`
}
