package shared

type ModifySubaccountRequest struct {
	Name                     *string `json:"name,omitempty"`
	Suspended                *bool   `json:"suspended,omitempty"`
	UsePrimaryAccountBalance *bool   `json:"use_primary_account_balance,omitempty"`
}
