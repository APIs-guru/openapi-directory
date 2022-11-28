package shared

// ListNamespacesResponse
// Response to ListNamespacesRequest that contains all the project's namespaces.
type ListNamespacesResponse struct {
	Namespaces []Namespace `json:"namespaces,omitempty"`
}
