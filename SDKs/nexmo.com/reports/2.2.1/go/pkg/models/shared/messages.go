package shared

import (
	"time"
)

type Messages struct {
	AccountID          string              `json:"account_id"`
	CallbackURL        *string             `json:"callback_url"`
	DateEnd            *time.Time          `json:"date_end"`
	DateStart          *time.Time          `json:"date_start"`
	Direction          DirectionEnum       `json:"direction"`
	From               *string             `json:"from"`
	ID                 *string             `json:"id"`
	IncludeMessage     *bool               `json:"include_message"`
	IncludeSubaccounts *bool               `json:"include_subaccounts"`
	Product            ProductMessagesEnum `json:"product"`
	To                 *string             `json:"to"`
}
