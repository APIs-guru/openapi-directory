package shared

type AccountUnauthorized struct {
	ErrorCode      *string `json:"error-code"`
	ErrorCodeLabel *string `json:"error-code-label"`
}
