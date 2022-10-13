package shared

import (
	"time"
)

type CsvAsr struct {
	AccountID         *string        `json:"account_id"`
	CallDateStart     *time.Time     `json:"call_date_start"`
	CallID            *string        `json:"call_id"`
	Currency          *string        `json:"currency"`
	DateEnd           *time.Time     `json:"date_end"`
	DateStart         *time.Time     `json:"date_start"`
	Direction         *DirectionEnum `json:"direction"`
	Duration          *int64         `json:"duration"`
	From              *string        `json:"from"`
	Price             *float64       `json:"price"`
	Status            *AsrStatusEnum `json:"status"`
	StatusDescription *string        `json:"status_description"`
	To                *string        `json:"to"`
	TotalPrice        *float64       `json:"total_price"`
}
