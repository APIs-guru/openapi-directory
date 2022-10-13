package shared

type ErrorAuthenticationFailed struct {
	ErrorCode      *interface{} `json:"error-code"`
	ErrorCodeLabel *interface{} `json:"error-code-label"`
}
