package shared

type InternalErrorMessage struct {
	Code    *int32  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
