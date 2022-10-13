package shared

type Unauthorized struct {
	ErrorCode      *string `json:"error-code"`
	ErrorCodeLabel *string `json:"error-code-label"`
}
