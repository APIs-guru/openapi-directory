package shared

// ListNamespacesResponse
// The response message for RegistrationService.ListNamespaces.
type ListNamespacesResponse struct {
	Namespaces    []Namespace `json:"namespaces,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
