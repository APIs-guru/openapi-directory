package shared

// TypeProvidersListResponse
// A response that returns all Type Providers supported by Deployment Manager
type TypeProvidersListResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	TypeProviders []TypeProvider `json:"typeProviders,omitempty"`
}
