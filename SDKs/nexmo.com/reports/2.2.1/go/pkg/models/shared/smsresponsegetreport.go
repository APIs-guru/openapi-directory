package shared

import (
	"time"
)

type SmsResponseGetReport struct {
	Links              *Links             `json:"_links"`
	AccountID          string             `json:"account_id"`
	AccountRef         *string            `json:"account_ref"`
	CallbackURL        *string            `json:"callback_url"`
	ClientRef          *string            `json:"client_ref"`
	DateEnd            *time.Time         `json:"date_end"`
	DateStart          *time.Time         `json:"date_start"`
	Direction          DirectionEnum      `json:"direction"`
	From               *string            `json:"from"`
	IncludeMessage     *bool              `json:"include_message"`
	IncludeSubaccounts *bool              `json:"include_subaccounts"`
	ItemsCount         *int64             `json:"items_count"`
	Network            *string            `json:"network"`
	Product            ProductSmsEnum     `json:"product"`
	ReceiveTime        *time.Time         `json:"receive_time"`
	RequestID          *string            `json:"request_id"`
	RequestStatus      *RequestStatusEnum `json:"request_status"`
	ShowConcatenated   *bool              `json:"show_concatenated"`
	StartTime          *time.Time         `json:"start_time"`
	Status             *SmsStatusEnum     `json:"status"`
	To                 *string            `json:"to"`
}
