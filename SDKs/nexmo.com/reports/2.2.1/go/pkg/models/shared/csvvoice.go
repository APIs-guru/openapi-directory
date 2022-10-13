package shared

import (
	"time"
)

type CsvVoice struct {
	AccountID         *string          `json:"account_id"`
	CallID            *string          `json:"call_id"`
	Country           *string          `json:"country"`
	CountryName       *string          `json:"country_name"`
	Currency          *string          `json:"currency"`
	DateEnd           *time.Time       `json:"date_end"`
	DateStart         *time.Time       `json:"date_start"`
	Direction         *DirectionEnum   `json:"direction"`
	Duration          *int64           `json:"duration"`
	From              *string          `json:"from"`
	Network           *string          `json:"network"`
	NetworkName       *string          `json:"network_name"`
	Price             *float64         `json:"price"`
	Status            *VoiceStatusEnum `json:"status"`
	StatusDescription *string          `json:"status_description"`
	To                *string          `json:"to"`
	TotalPrice        *float64         `json:"total_price"`
}
