package shared

type ListConnectivityTestsResponse struct {
	NextPageToken *string            `json:"nextPageToken"`
	Resources     []ConnectivityTest `json:"resources"`
	Unreachable   []string           `json:"unreachable"`
}
