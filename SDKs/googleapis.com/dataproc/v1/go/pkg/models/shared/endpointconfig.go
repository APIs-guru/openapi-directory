package shared

type EndpointConfig struct {
	EnableHTTPPortAccess *bool             `json:"enableHttpPortAccess"`
	HTTPPorts            map[string]string `json:"httpPorts"`
}
