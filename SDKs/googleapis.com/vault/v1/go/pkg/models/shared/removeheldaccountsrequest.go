package shared

// RemoveHeldAccountsRequest
// Remove a list of accounts from a hold.
type RemoveHeldAccountsRequest struct {
	AccountIds []string `json:"accountIds,omitempty"`
}
