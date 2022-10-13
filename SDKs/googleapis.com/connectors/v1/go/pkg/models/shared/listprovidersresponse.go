package shared

type ListProvidersResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Providers     []Provider `json:"providers"`
	Unreachable   []string   `json:"unreachable"`
}
