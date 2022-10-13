package shared

type GmbAccounts struct {
	AccountID   *string                 `json:"accountId"`
	GmbAccounts []GmbAccountsGmbAccount `json:"gmbAccounts"`
}
