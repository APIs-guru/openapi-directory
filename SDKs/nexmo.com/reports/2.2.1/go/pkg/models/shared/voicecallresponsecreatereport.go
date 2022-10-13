package shared

import (
	"time"
)

type VoiceCallResponseCreateReport struct {
	Links              *LinksCreateReport             `json:"_links"`
	AccountID          *string                        `json:"account_id"`
	CallbackURL        *string                        `json:"callback_url"`
	DateEnd            *time.Time                     `json:"date_end"`
	DateStart          *time.Time                     `json:"date_start"`
	Direction          *DirectionEnum                 `json:"direction"`
	From               *string                        `json:"from"`
	IncludeSubaccounts *bool                          `json:"include_subaccounts"`
	Network            *string                        `json:"network"`
	Product            *ProductVoiceEnum              `json:"product"`
	ReceiveTime        *time.Time                     `json:"receive_time"`
	RequestID          *string                        `json:"request_id"`
	RequestStatus      *RequestStatusCreateReportEnum `json:"request_status"`
	StartTime          *time.Time                     `json:"start_time"`
	Status             *VoiceStatusEnum               `json:"status"`
	To                 *string                        `json:"to"`
}
