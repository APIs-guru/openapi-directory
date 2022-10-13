package shared

type NewSubaccountRequest struct {
	Name                     string  `json:"name"`
	Secret                   *string `json:"secret"`
	UsePrimaryAccountBalance *bool   `json:"use_primary_account_balance"`
}
