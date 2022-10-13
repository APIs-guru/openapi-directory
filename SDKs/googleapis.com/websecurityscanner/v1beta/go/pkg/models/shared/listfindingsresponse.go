package shared

type ListFindingsResponse struct {
	Findings      []Finding `json:"findings"`
	NextPageToken *string   `json:"nextPageToken"`
}
