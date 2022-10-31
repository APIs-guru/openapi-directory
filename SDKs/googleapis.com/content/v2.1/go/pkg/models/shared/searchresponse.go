package shared

type SearchResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Results       []ReportRow `json:"results,omitempty"`
}
