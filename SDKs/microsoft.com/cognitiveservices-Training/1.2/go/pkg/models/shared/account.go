package shared

// Account
// Represents a user account
type Account struct {
	Email    *string       `json:"Email,omitempty"`
	Keys     *APIKeys      `json:"Keys,omitempty"`
	Quotas   *AccountQuota `json:"Quotas,omitempty"`
	UserName *string       `json:"UserName,omitempty"`
}
