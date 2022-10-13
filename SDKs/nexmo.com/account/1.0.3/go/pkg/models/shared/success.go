package shared

type Success struct {
	ErrorCode      *interface{} `json:"error-code"`
	ErrorCodeLabel *interface{} `json:"error-code-label"`
}
