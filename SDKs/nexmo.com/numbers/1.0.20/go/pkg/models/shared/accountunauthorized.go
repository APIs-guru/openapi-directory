package shared

type AccountUnauthorized struct {
	ErrorCode      *string `json:"error-code,omitempty"`
	ErrorCodeLabel *string `json:"error-code-label,omitempty"`
}
