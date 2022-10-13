package shared

type StageReferenceSearchResult struct {
	Items        []StageReference `json:"items"`
	ItemsPerPage *int32           `json:"itemsPerPage"`
	TotalResults *int32           `json:"totalResults"`
}
