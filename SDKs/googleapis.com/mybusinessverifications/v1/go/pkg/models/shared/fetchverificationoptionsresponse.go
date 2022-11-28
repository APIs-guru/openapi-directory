package shared

// FetchVerificationOptionsResponse
// Response message for Verifications.FetchVerificationOptions.
type FetchVerificationOptionsResponse struct {
	Options []VerificationOption `json:"options,omitempty"`
}
