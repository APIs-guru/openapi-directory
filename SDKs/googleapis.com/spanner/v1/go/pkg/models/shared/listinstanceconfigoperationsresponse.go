package shared

type ListInstanceConfigOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
