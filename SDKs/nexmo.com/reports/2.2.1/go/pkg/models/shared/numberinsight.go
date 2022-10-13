package shared

import (
	"time"
)

type NumberInsight struct {
	AccountID          string        `json:"account_id"`
	CallbackURL        *string       `json:"callback_url"`
	DateEnd            *time.Time    `json:"date_end"`
	DateStart          *time.Time    `json:"date_start"`
	IncludeSubaccounts *bool         `json:"include_subaccounts"`
	Network            *string       `json:"network"`
	Number             *string       `json:"number"`
	Product            ProductNiEnum `json:"product"`
}
