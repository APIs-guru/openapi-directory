package shared

// ListHeldAccountsResponse
// Returns a list of the accounts covered by a hold.
type ListHeldAccountsResponse struct {
	Accounts []HeldAccount `json:"accounts,omitempty"`
}
