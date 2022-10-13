package shared

type SearchResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Results       []ReportRow `json:"results"`
}
