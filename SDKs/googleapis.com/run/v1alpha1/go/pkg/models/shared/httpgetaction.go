package shared

type HTTPGetAction struct {
	Host        *string      `json:"host,omitempty"`
	HTTPHeaders []HTTPHeader `json:"httpHeaders,omitempty"`
	Path        *string      `json:"path,omitempty"`
	Scheme      *string      `json:"scheme,omitempty"`
}
