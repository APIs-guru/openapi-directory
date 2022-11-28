package shared

// CompleteVerificationRequest
// Request message for Verifications.CompleteVerificationAction.
type CompleteVerificationRequest struct {
	Pin *string `json:"pin,omitempty"`
}
