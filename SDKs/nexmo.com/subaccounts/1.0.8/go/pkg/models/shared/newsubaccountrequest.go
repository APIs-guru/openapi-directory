package shared

type NewSubaccountRequest struct {
	Name                     string  `json:"name"`
	Secret                   *string `json:"secret,omitempty"`
	UsePrimaryAccountBalance *bool   `json:"use_primary_account_balance,omitempty"`
}
