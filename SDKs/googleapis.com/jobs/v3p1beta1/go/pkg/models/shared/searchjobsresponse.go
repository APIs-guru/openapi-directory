package shared

type SearchJobsResponse struct {
	BroadenedQueryJobsCount *int32                 `json:"broadenedQueryJobsCount,omitempty"`
	EstimatedTotalSize      *int32                 `json:"estimatedTotalSize,omitempty"`
	HistogramQueryResults   []HistogramQueryResult `json:"histogramQueryResults,omitempty"`
	HistogramResults        *HistogramResults      `json:"histogramResults,omitempty"`
	LocationFilters         []Location             `json:"locationFilters,omitempty"`
	MatchingJobs            []MatchingJob          `json:"matchingJobs,omitempty"`
	Metadata                *ResponseMetadata      `json:"metadata,omitempty"`
	NextPageToken           *string                `json:"nextPageToken,omitempty"`
	SpellCorrection         *SpellingCorrection    `json:"spellCorrection,omitempty"`
	TotalSize               *int32                 `json:"totalSize,omitempty"`
}
