package shared

// Account
// Represents a Google Tag Manager Account.
type Account struct {
	AccountID     *string          `json:"accountId,omitempty"`
	Features      *AccountFeatures `json:"features,omitempty"`
	Fingerprint   *string          `json:"fingerprint,omitempty"`
	Name          *string          `json:"name,omitempty"`
	Path          *string          `json:"path,omitempty"`
	ShareData     *bool            `json:"shareData,omitempty"`
	TagManagerURL *string          `json:"tagManagerUrl,omitempty"`
}
