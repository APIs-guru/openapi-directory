package shared

import (
	"time"
)

type CsvNi struct {
	AccountID    *string    `json:"account_id"`
	Country      *string    `json:"country"`
	CountryName  *string    `json:"country_name"`
	Currency     *string    `json:"currency"`
	DateReceived *time.Time `json:"date_received"`
	FirstName    *string    `json:"first_name"`
	LastName     *string    `json:"last_name"`
	Network      *string    `json:"network"`
	NetworkName  *string    `json:"network_name"`
	NetworkType  *string    `json:"network_type"`
	Number       *string    `json:"number"`
	Ported       *string    `json:"ported"`
	ProductType  *string    `json:"product_type"`
	Reachable    *string    `json:"reachable"`
	RequestID    *string    `json:"request_id"`
	ResponseCode *string    `json:"response_code"`
	Status       *string    `json:"status"`
	TotalPrice   *float64   `json:"total_price"`
	Valid        *string    `json:"valid"`
}
