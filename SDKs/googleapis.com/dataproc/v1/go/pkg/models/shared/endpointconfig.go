package shared

type EndpointConfig struct {
	EnableHTTPPortAccess *bool             `json:"enableHttpPortAccess,omitempty"`
	HTTPPorts            map[string]string `json:"httpPorts,omitempty"`
}
