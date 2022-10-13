package shared

type AccounttaxListResponse struct {
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
	Resources     []AccountTax `json:"resources"`
}
