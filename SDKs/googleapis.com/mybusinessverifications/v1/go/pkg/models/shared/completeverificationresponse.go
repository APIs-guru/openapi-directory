package shared

// CompleteVerificationResponse
// Response message for Verifications.CompleteVerificationAction.
type CompleteVerificationResponse struct {
	Verification *Verification `json:"verification,omitempty"`
}
