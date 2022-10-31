package shared




type SearchJobsRequestDiversificationLevelEnum string

const (
    SearchJobsRequestDiversificationLevelEnumDiversificationLevelUnspecified SearchJobsRequestDiversificationLevelEnum = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
SearchJobsRequestDiversificationLevelEnumDisabled SearchJobsRequestDiversificationLevelEnum = "DISABLED"
SearchJobsRequestDiversificationLevelEnumSimple SearchJobsRequestDiversificationLevelEnum = "SIMPLE"
SearchJobsRequestDiversificationLevelEnumOnePerCompany SearchJobsRequestDiversificationLevelEnum = "ONE_PER_COMPANY"
SearchJobsRequestDiversificationLevelEnumTwoPerCompany SearchJobsRequestDiversificationLevelEnum = "TWO_PER_COMPANY"
SearchJobsRequestDiversificationLevelEnumDiversifyByLooserSimilarity SearchJobsRequestDiversificationLevelEnum = "DIVERSIFY_BY_LOOSER_SIMILARITY"
)



type SearchJobsRequestJobViewEnum string

const (
    SearchJobsRequestJobViewEnumJobViewUnspecified SearchJobsRequestJobViewEnum = "JOB_VIEW_UNSPECIFIED"
SearchJobsRequestJobViewEnumJobViewIDOnly SearchJobsRequestJobViewEnum = "JOB_VIEW_ID_ONLY"
SearchJobsRequestJobViewEnumJobViewMinimal SearchJobsRequestJobViewEnum = "JOB_VIEW_MINIMAL"
SearchJobsRequestJobViewEnumJobViewSmall SearchJobsRequestJobViewEnum = "JOB_VIEW_SMALL"
SearchJobsRequestJobViewEnumJobViewFull SearchJobsRequestJobViewEnum = "JOB_VIEW_FULL"
)



type SearchJobsRequestKeywordMatchModeEnum string

const (
    SearchJobsRequestKeywordMatchModeEnumKeywordMatchModeUnspecified SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_MODE_UNSPECIFIED"
SearchJobsRequestKeywordMatchModeEnumKeywordMatchDisabled SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_DISABLED"
SearchJobsRequestKeywordMatchModeEnumKeywordMatchAll SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_ALL"
SearchJobsRequestKeywordMatchModeEnumKeywordMatchTitleOnly SearchJobsRequestKeywordMatchModeEnum = "KEYWORD_MATCH_TITLE_ONLY"
)



type SearchJobsRequestSearchModeEnum string

const (
    SearchJobsRequestSearchModeEnumSearchModeUnspecified SearchJobsRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
SearchJobsRequestSearchModeEnumJobSearch SearchJobsRequestSearchModeEnum = "JOB_SEARCH"
SearchJobsRequestSearchModeEnumFeaturedJobSearch SearchJobsRequestSearchModeEnum = "FEATURED_JOB_SEARCH"
)


type SearchJobsRequest struct {
    CustomRankingInfo *CustomRankingInfo `json:"customRankingInfo,omitempty"`
    DisableKeywordMatch *bool `json:"disableKeywordMatch,omitempty"`
    DiversificationLevel *SearchJobsRequestDiversificationLevelEnum `json:"diversificationLevel,omitempty"`
    EnableBroadening *bool `json:"enableBroadening,omitempty"`
    HistogramQueries []HistogramQuery `json:"histogramQueries,omitempty"`
    JobQuery *JobQuery `json:"jobQuery,omitempty"`
    JobView *SearchJobsRequestJobViewEnum `json:"jobView,omitempty"`
    KeywordMatchMode *SearchJobsRequestKeywordMatchModeEnum `json:"keywordMatchMode,omitempty"`
    MaxPageSize *int32 `json:"maxPageSize,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    OrderBy *string `json:"orderBy,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    RequestMetadata *RequestMetadata `json:"requestMetadata,omitempty"`
    SearchMode *SearchJobsRequestSearchModeEnum `json:"searchMode,omitempty"`
    
}

