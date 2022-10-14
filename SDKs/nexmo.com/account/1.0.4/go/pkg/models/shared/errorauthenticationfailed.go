package shared

type ErrorAuthenticationFailed struct {
	ErrorCode      *interface{} `json:"error-code,omitempty"`
	ErrorCodeLabel *interface{} `json:"error-code-label,omitempty"`
}
