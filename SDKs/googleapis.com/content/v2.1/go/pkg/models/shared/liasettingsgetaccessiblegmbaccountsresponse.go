package shared

type LiasettingsGetAccessibleGmbAccountsResponse struct {
	AccountID   *string                 `json:"accountId"`
	GmbAccounts []GmbAccountsGmbAccount `json:"gmbAccounts"`
	Kind        *string                 `json:"kind"`
}
