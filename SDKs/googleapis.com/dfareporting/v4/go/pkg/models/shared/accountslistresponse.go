package shared

type AccountsListResponse struct {
	Accounts      []Account `json:"accounts"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
}
