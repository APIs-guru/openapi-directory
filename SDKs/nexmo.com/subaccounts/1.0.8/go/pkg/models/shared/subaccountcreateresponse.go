package shared

type SubaccountCreateResponse struct {
	APIKey                   *string  `json:"api_key"`
	Balance                  *float64 `json:"balance"`
	CreatedAt                *string  `json:"created_at"`
	CreditLimit              *float64 `json:"credit_limit"`
	Name                     *string  `json:"name"`
	PrimaryAccountAPIKey     *string  `json:"primary_account_api_key"`
	Secret                   *string  `json:"secret"`
	Suspended                *bool    `json:"suspended"`
	UsePrimaryAccountBalance *bool    `json:"use_primary_account_balance"`
}
