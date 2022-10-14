package shared

type Response420 struct {
	ErrorCode      *string `json:"error-code,omitempty"`
	ErrorCodeLabel *string `json:"error-code-label,omitempty"`
}
