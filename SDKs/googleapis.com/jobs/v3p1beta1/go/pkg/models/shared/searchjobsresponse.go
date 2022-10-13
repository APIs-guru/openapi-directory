package shared

type SearchJobsResponse struct {
	BroadenedQueryJobsCount *int32                 `json:"broadenedQueryJobsCount"`
	EstimatedTotalSize      *int32                 `json:"estimatedTotalSize"`
	HistogramQueryResults   []HistogramQueryResult `json:"histogramQueryResults"`
	HistogramResults        *HistogramResults      `json:"histogramResults"`
	LocationFilters         []Location             `json:"locationFilters"`
	MatchingJobs            []MatchingJob          `json:"matchingJobs"`
	Metadata                *ResponseMetadata      `json:"metadata"`
	NextPageToken           *string                `json:"nextPageToken"`
	SpellCorrection         *SpellingCorrection    `json:"spellCorrection"`
	TotalSize               *int32                 `json:"totalSize"`
}
