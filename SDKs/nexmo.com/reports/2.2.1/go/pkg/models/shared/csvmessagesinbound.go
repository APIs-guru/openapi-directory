package shared

import (
	"time"
)

type CsvMessagesInbound struct {
	AccountID    *string        `json:"account_id"`
	Currency     *string        `json:"currency"`
	DateReceived *time.Time     `json:"date_received"`
	Direction    *DirectionEnum `json:"direction"`
	From         *string        `json:"from"`
	MessageBody  *string        `json:"message_body"`
	MessageID    *string        `json:"message_id"`
	Provider     *string        `json:"provider"`
	To           *string        `json:"to"`
	TotalPrice   *float64       `json:"total_price"`
}
