package shared

type CheckResponse struct {
	Headers map[string]string `json:"headers"`
	Status  *Status           `json:"status"`
}
