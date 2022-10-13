package shared

type InternalErrorMessage struct {
	Code    *int32  `json:"code"`
	Message *string `json:"message"`
}
