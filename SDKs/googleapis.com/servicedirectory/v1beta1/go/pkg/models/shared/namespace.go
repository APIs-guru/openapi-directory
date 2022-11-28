package shared

// Namespace
// A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
type Namespace struct {
	CreateTime *string           `json:"createTime,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Name       *string           `json:"name,omitempty"`
	UpdateTime *string           `json:"updateTime,omitempty"`
}

// NamespaceInput
// A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
type NamespaceInput struct {
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
}
