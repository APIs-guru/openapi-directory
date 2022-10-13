package shared

type AccountsListResponse struct {
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	Resources     []Account `json:"resources"`
}
