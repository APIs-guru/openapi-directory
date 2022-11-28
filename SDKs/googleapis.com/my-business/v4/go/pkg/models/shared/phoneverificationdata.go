package shared

// PhoneVerificationData
// Display Data for verifications through phone, e.g. phone call, sms.
type PhoneVerificationData struct {
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}
