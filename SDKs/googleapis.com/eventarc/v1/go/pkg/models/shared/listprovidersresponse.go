package shared

// ListProvidersResponse
// The response message for the `ListProviders` method.
type ListProvidersResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Providers     []Provider `json:"providers,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
