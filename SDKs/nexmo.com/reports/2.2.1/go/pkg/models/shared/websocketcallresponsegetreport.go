package shared

import (
	"time"
)

type WebsocketCallResponseGetReport struct {
	Links              *Links                `json:"_links"`
	AccountID          *string               `json:"account_id"`
	CallbackURL        *string               `json:"callback_url"`
	DateEnd            *time.Time            `json:"date_end"`
	DateStart          *time.Time            `json:"date_start"`
	IncludeSubaccounts *bool                 `json:"include_subaccounts"`
	ItemsCount         *int64                `json:"items_count"`
	Product            *ProductWebsocketEnum `json:"product"`
	ReceiveTime        *time.Time            `json:"receive_time"`
	RequestID          *string               `json:"request_id"`
	RequestStatus      *RequestStatusEnum    `json:"request_status"`
	StartTime          *time.Time            `json:"start_time"`
	Status             *string               `json:"status"`
}
