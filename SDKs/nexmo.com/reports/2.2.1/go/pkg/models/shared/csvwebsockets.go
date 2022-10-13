package shared

import (
	"time"
)

type CsvWebsockets struct {
	AccountID  *string    `json:"account_id"`
	CallID     *string    `json:"call_id"`
	Currency   *string    `json:"currency"`
	DateEnd    *time.Time `json:"date_end"`
	DateStart  *time.Time `json:"date_start"`
	Duration   *int64     `json:"duration"`
	Price      *float64   `json:"price"`
	Status     *string    `json:"status"`
	TotalPrice *float64   `json:"total_price"`
}
