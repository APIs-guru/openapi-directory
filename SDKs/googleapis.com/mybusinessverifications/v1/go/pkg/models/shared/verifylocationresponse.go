package shared

// VerifyLocationResponse
// Response message for Verifications.VerifyLocation.
type VerifyLocationResponse struct {
	Verification *Verification `json:"verification,omitempty"`
}
