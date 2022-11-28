package shared

// EndpointConfig
// Endpoint config for this cluster
type EndpointConfig struct {
	EnableHTTPPortAccess *bool             `json:"enableHttpPortAccess,omitempty"`
	HTTPPorts            map[string]string `json:"httpPorts,omitempty"`
}

// EndpointConfigInput
// Endpoint config for this cluster
type EndpointConfigInput struct {
	EnableHTTPPortAccess *bool `json:"enableHttpPortAccess,omitempty"`
}
