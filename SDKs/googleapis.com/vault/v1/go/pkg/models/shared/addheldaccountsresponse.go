package shared

// AddHeldAccountsResponse
// Response for batch create held accounts.
type AddHeldAccountsResponse struct {
	Responses []AddHeldAccountResult `json:"responses,omitempty"`
}
