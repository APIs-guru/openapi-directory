package shared

// PhoneInput
// Input for PHONE_CALL/SMS verification.
type PhoneInput struct {
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}
