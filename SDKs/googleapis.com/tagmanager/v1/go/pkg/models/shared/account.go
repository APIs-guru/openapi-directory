package shared

type Account struct {
	AccountID   *string `json:"accountId"`
	Fingerprint *string `json:"fingerprint"`
	Name        *string `json:"name"`
	ShareData   *bool   `json:"shareData"`
}
