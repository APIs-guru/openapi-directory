package shared

type PartnerError struct {
	Error   *bool   `json:"error,omitempty"`
	Field   *string `json:"field,omitempty"`
	Message *string `json:"message,omitempty"`
}
