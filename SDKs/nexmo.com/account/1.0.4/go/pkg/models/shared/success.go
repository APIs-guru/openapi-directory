package shared

type Success struct {
	ErrorCode      *interface{} `json:"error-code,omitempty"`
	ErrorCodeLabel *interface{} `json:"error-code-label,omitempty"`
}
