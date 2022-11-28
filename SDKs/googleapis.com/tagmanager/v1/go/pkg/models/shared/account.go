package shared

// Account
// Represents a Google Tag Manager Account.
type Account struct {
	AccountID   *string `json:"accountId,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	Name        *string `json:"name,omitempty"`
	ShareData   *bool   `json:"shareData,omitempty"`
}
