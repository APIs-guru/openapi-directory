package shared

// HTTPGetAction
// Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests.
type HTTPGetAction struct {
	Host        *string      `json:"host,omitempty"`
	HTTPHeaders []HTTPHeader `json:"httpHeaders,omitempty"`
	Path        *string      `json:"path,omitempty"`
	Scheme      *string      `json:"scheme,omitempty"`
}
