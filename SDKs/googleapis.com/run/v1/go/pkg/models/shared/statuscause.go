package shared

type StatusCause struct {
	Field   *string `json:"field"`
	Message *string `json:"message"`
	Reason  *string `json:"reason"`
}
