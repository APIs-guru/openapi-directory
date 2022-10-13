package shared

type HTTPGetAction struct {
	Host        *string      `json:"host"`
	HTTPHeaders []HTTPHeader `json:"httpHeaders"`
	Path        *string      `json:"path"`
	Scheme      *string      `json:"scheme"`
}
