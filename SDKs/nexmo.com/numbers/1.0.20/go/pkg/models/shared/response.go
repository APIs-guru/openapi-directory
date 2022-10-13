package shared

type Response struct {
	ErrorCode      *string `json:"error-code"`
	ErrorCodeLabel *string `json:"error-code-label"`
}
