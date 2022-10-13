package shared

type PartnerError struct {
	Error   *bool   `json:"error"`
	Field   *string `json:"field"`
	Message *string `json:"message"`
}
