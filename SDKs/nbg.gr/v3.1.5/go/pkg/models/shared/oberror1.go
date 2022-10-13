package shared

type ObError1 struct {
	ErrorCode ErrorCodeEnum `json:"ErrorCode"`
	Message   string        `json:"Message"`
	Path      *string       `json:"Path"`
}
