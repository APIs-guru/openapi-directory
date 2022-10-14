package shared

type Endpoint struct {
	AllowCors *bool   `json:"allowCors,omitempty"`
	Name      *string `json:"name,omitempty"`
	Target    *string `json:"target,omitempty"`
}
