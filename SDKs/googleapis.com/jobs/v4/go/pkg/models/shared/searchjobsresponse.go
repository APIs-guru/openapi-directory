package shared

// SearchJobsResponse
// Response for SearchJob method.
type SearchJobsResponse struct {
	BroadenedQueryJobsCount *int32                 `json:"broadenedQueryJobsCount,omitempty"`
	HistogramQueryResults   []HistogramQueryResult `json:"histogramQueryResults,omitempty"`
	LocationFilters         []Location             `json:"locationFilters,omitempty"`
	MatchingJobs            []MatchingJob          `json:"matchingJobs,omitempty"`
	Metadata                *ResponseMetadata      `json:"metadata,omitempty"`
	NextPageToken           *string                `json:"nextPageToken,omitempty"`
	SpellCorrection         *SpellingCorrection    `json:"spellCorrection,omitempty"`
	TotalSize               *int32                 `json:"totalSize,omitempty"`
}
