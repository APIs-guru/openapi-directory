package shared

// RemoveHeldAccountsResponse
// Response for batch delete held accounts.
type RemoveHeldAccountsResponse struct {
	Statuses []Status `json:"statuses,omitempty"`
}
