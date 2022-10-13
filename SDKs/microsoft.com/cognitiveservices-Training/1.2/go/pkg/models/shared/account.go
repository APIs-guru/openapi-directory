package shared

type Account struct {
	Email    *string       `json:"Email"`
	Keys     *APIKeys      `json:"Keys"`
	Quotas   *AccountQuota `json:"Quotas"`
	UserName *string       `json:"UserName"`
}
