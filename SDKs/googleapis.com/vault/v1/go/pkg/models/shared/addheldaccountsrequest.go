package shared

type AddHeldAccountsRequest struct {
	AccountIds []string `json:"accountIds,omitempty"`
	Emails     []string `json:"emails,omitempty"`
}
