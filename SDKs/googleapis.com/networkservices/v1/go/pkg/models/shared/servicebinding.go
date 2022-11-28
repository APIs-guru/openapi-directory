package shared

// ServiceBinding
// ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
type ServiceBinding struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Service     *string           `json:"service,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}

// ServiceBindingInput
// ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
type ServiceBindingInput struct {
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Service     *string           `json:"service,omitempty"`
}
