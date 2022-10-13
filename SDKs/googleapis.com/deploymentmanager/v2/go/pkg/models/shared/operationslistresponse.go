package shared

type OperationsListResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
