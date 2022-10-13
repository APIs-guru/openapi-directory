package shared

import (
	"time"
)

type VerifyAPI struct {
	AccountID          string            `json:"account_id"`
	CallbackURL        *string           `json:"callback_url"`
	DateEnd            *time.Time        `json:"date_end"`
	DateStart          *time.Time        `json:"date_start"`
	IncludeSubaccounts *bool             `json:"include_subaccounts"`
	Network            *string           `json:"network"`
	Product            ProductVerifyEnum `json:"product"`
	To                 *string           `json:"to"`
}
