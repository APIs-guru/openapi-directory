package shared

type StatusCause struct {
	Field   *string `json:"field,omitempty"`
	Message *string `json:"message,omitempty"`
	Reason  *string `json:"reason,omitempty"`
}
