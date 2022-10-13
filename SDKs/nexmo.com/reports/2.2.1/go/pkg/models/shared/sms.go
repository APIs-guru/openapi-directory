package shared

import (
	"time"
)

type Sms struct {
	AccountID          string         `json:"account_id"`
	AccountRef         *string        `json:"account_ref"`
	CallbackURL        *string        `json:"callback_url"`
	ClientRef          *string        `json:"client_ref"`
	DateEnd            *time.Time     `json:"date_end"`
	DateStart          *time.Time     `json:"date_start"`
	Direction          DirectionEnum  `json:"direction"`
	From               *string        `json:"from"`
	IncludeMessage     *bool          `json:"include_message"`
	IncludeSubaccounts *bool          `json:"include_subaccounts"`
	Network            *string        `json:"network"`
	Product            ProductSmsEnum `json:"product"`
	ShowConcatenated   *bool          `json:"show_concatenated"`
	Status             *SmsStatusEnum `json:"status"`
	To                 *string        `json:"to"`
}
