package shared

type ListOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
