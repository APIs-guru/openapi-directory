package shared

type AddHeldAccountsRequest struct {
	AccountIds []string `json:"accountIds"`
	Emails     []string `json:"emails"`
}
