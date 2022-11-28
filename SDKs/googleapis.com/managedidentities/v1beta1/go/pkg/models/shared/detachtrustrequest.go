package shared

// DetachTrustRequestInput
// Request message for DetachTrust
type DetachTrustRequestInput struct {
	Trust *TrustInput `json:"trust,omitempty"`
}
