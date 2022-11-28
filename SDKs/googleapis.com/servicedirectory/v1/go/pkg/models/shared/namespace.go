package shared

// NamespaceInput
// A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
type NamespaceInput struct {
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
}

// Namespace
// A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
type Namespace struct {
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
	UID    *string           `json:"uid,omitempty"`
}
