package shared

import (
	"time"
)

type JSONSmsInboundWithBody struct {
	AccountID    *string        `json:"account_id"`
	Country      *string        `json:"country"`
	CountryName  *string        `json:"country_name"`
	Currency     *string        `json:"currency"`
	DateReceived *time.Time     `json:"date_received"`
	Direction    *DirectionEnum `json:"direction"`
	From         *string        `json:"from"`
	MessageBody  *string        `json:"message_body"`
	MessageID    *string        `json:"message_id"`
	Network      *string        `json:"network"`
	NetworkName  *string        `json:"network_name"`
	To           *string        `json:"to"`
	TotalPrice   *float64       `json:"total_price"`
}
