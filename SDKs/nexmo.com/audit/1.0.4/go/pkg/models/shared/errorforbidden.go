package shared

type ErrorForbidden struct {
	Error   *string `json:"error,omitempty"`
	Message *string `json:"message,omitempty"`
	Status  *int64  `json:"status,omitempty"`
}
