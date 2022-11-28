package shared

// ListProvidersResponse
// Response message for Connectors.ListProviders.
type ListProvidersResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Providers     []Provider `json:"providers,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
