package shared

// Endpoint
// An individual endpoint that provides a service. The service must already exist to create an endpoint.
type Endpoint struct {
	Address     *string           `json:"address,omitempty"`
	Annotations map[string]string `json:"annotations,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Network     *string           `json:"network,omitempty"`
	Port        *int32            `json:"port,omitempty"`
	UID         *string           `json:"uid,omitempty"`
}

// EndpointInput
// An individual endpoint that provides a service. The service must already exist to create an endpoint.
type EndpointInput struct {
	Address     *string           `json:"address,omitempty"`
	Annotations map[string]string `json:"annotations,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Network     *string           `json:"network,omitempty"`
	Port        *int32            `json:"port,omitempty"`
}
