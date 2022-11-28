package shared

// ListConnectivityTestsResponse
// Response for the `ListConnectivityTests` method.
type ListConnectivityTestsResponse struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	Resources     []ConnectivityTest `json:"resources,omitempty"`
	Unreachable   []string           `json:"unreachable,omitempty"`
}
