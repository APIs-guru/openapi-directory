package shared

import (
	"time"
)

type CsvVerify struct {
	AccountID      *string    `json:"account_id"`
	Country        *string    `json:"country"`
	CountryName    *string    `json:"country_name"`
	Currency       *string    `json:"currency"`
	DateFinalized  *time.Time `json:"date_finalized"`
	DateReceived   *time.Time `json:"date_received"`
	EstimatedPrice *string    `json:"estimated_price"`
	FirstEventDate *time.Time `json:"first_event_date"`
	From           *string    `json:"from"`
	LastEventDate  *time.Time `json:"last_event_date"`
	Locale         *string    `json:"locale"`
	Network        *string    `json:"network"`
	NetworkName    *string    `json:"network_name"`
	NumberType     *string    `json:"number_type"`
	Price          *float64   `json:"price"`
	PricingModel   *string    `json:"pricing_model"`
	RequestID      *string    `json:"request_id"`
	SmsEventCount  *int64     `json:"sms_event_count"`
	To             *string    `json:"to"`
	TtsEventCount  *int64     `json:"tts_event_count"`
	VerifyStatus   *string    `json:"verify_status"`
}
