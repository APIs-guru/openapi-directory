package shared

// AddHeldAccountsRequest
// Add a list of accounts to a hold.
type AddHeldAccountsRequest struct {
	AccountIds []string `json:"accountIds,omitempty"`
	Emails     []string `json:"emails,omitempty"`
}
