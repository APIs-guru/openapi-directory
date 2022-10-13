package shared

type ModifySubaccountRequest struct {
	Name                     *string `json:"name"`
	Suspended                *bool   `json:"suspended"`
	UsePrimaryAccountBalance *bool   `json:"use_primary_account_balance"`
}
