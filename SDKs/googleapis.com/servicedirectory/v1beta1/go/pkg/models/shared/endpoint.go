package shared

// Endpoint
// An individual endpoint that provides a service. The service must already exist to create an endpoint.
type Endpoint struct {
	Address    *string           `json:"address,omitempty"`
	CreateTime *string           `json:"createTime,omitempty"`
	Metadata   map[string]string `json:"metadata,omitempty"`
	Name       *string           `json:"name,omitempty"`
	Network    *string           `json:"network,omitempty"`
	Port       *int32            `json:"port,omitempty"`
	UpdateTime *string           `json:"updateTime,omitempty"`
}

// EndpointInput
// An individual endpoint that provides a service. The service must already exist to create an endpoint.
type EndpointInput struct {
	Address  *string           `json:"address,omitempty"`
	Metadata map[string]string `json:"metadata,omitempty"`
	Name     *string           `json:"name,omitempty"`
	Network  *string           `json:"network,omitempty"`
	Port     *int32            `json:"port,omitempty"`
}
