package shared

// ValidateTrustRequestInput
// Request message for ValidateTrust
type ValidateTrustRequestInput struct {
	Trust *TrustInput `json:"trust,omitempty"`
}
