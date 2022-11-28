package shared

// VerifyPhoneNumberResponse
// Response message for the VerifyPhoneNumber method.
type VerifyPhoneNumberResponse struct {
	VerifiedPhoneNumber *string `json:"verifiedPhoneNumber,omitempty"`
}
