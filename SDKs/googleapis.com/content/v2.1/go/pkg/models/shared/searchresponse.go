package shared

// SearchResponse
// Response message for the ReportService.Search method.
type SearchResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Results       []ReportRow `json:"results,omitempty"`
}
