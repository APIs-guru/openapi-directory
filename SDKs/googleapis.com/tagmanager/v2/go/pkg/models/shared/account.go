package shared

type Account struct {
	AccountID     *string `json:"accountId"`
	Fingerprint   *string `json:"fingerprint"`
	Name          *string `json:"name"`
	Path          *string `json:"path"`
	ShareData     *bool   `json:"shareData"`
	TagManagerURL *string `json:"tagManagerUrl"`
}
