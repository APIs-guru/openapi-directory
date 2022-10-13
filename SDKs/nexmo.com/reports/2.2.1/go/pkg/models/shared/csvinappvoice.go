package shared

import (
	"time"
)

type CsvInAppVoice struct {
	AccountID      *string    `json:"account_id"`
	ApplicationID  *string    `json:"application_id"`
	ClientRef      *string    `json:"client_ref"`
	ConversationID *string    `json:"conversation_id"`
	Currency       *string    `json:"currency"`
	DateEnd        *time.Time `json:"date_end"`
	DateStart      *time.Time `json:"date_start"`
	Duration       *int64     `json:"duration"`
	ID             *string    `json:"id"`
	LegID          *string    `json:"leg_id"`
	Price          *float64   `json:"price"`
	RequestID      *string    `json:"request_id"`
	Status         *string    `json:"status"`
	TotalPrice     *float64   `json:"total_price"`
	UserID         *string    `json:"user_id"`
}
