package shared

type Endpoint struct {
	AllowCors *bool   `json:"allowCors"`
	Name      *string `json:"name"`
	Target    *string `json:"target"`
}
