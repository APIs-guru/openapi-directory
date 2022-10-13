package shared

type RuntimeError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}
