package shared

type OperationsListResponse struct {
	Items         []Operation `json:"items"`
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
}
