package shared

import (
	"time"
)

type WebsocketCall struct {
	AccountID          string               `json:"account_id"`
	CallbackURL        *string              `json:"callback_url"`
	DateEnd            *time.Time           `json:"date_end"`
	DateStart          *time.Time           `json:"date_start"`
	IncludeSubaccounts *bool                `json:"include_subaccounts"`
	Product            ProductWebsocketEnum `json:"product"`
	Status             *string              `json:"status"`
}
