package shared

import (
	"time"
)

type Asr struct {
	AccountID          string         `json:"account_id"`
	CallbackURL        *string        `json:"callback_url"`
	DateEnd            *time.Time     `json:"date_end"`
	DateStart          *time.Time     `json:"date_start"`
	Direction          *DirectionEnum `json:"direction"`
	From               *string        `json:"from"`
	IncludeSubaccounts *bool          `json:"include_subaccounts"`
	Product            ProductAsrEnum `json:"product"`
	Status             *AsrStatusEnum `json:"status"`
	To                 *string        `json:"to"`
}
