package shared

import (
	"time"
)

type InAppVoiceResponseGetReport struct {
	Links              *Links                 `json:"_links"`
	AccountID          *string                `json:"account_id"`
	CallbackURL        *string                `json:"callback_url"`
	ConversationID     *string                `json:"conversation_id"`
	DateEnd            *time.Time             `json:"date_end"`
	DateStart          *time.Time             `json:"date_start"`
	IncludeSubaccounts *bool                  `json:"include_subaccounts"`
	ItemsCount         *int64                 `json:"items_count"`
	Product            *ProductInAppVoiceEnum `json:"product"`
	ReceiveTime        *time.Time             `json:"receive_time"`
	RequestID          *string                `json:"request_id"`
	RequestStatus      *RequestStatusEnum     `json:"request_status"`
	StartTime          *time.Time             `json:"start_time"`
}
