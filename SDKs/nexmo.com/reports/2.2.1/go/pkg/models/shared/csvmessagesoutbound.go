package shared

import (
	"time"
)

type CsvMessagesOutbound struct {
	AccountID     *string        `json:"account_id"`
	ClientRef     *string        `json:"client_ref"`
	Country       *string        `json:"country"`
	CountryName   *string        `json:"country_name"`
	Currency      *string        `json:"currency"`
	DateFinalized *time.Time     `json:"date_finalized"`
	DateReceived  *time.Time     `json:"date_received"`
	Direction     *DirectionEnum `json:"direction"`
	ErrorCode     *string        `json:"error_code"`
	From          *string        `json:"from"`
	Latency       *int64         `json:"latency"`
	MessageBody   *string        `json:"message_body"`
	MessageID     *string        `json:"message_id"`
	Provider      *string        `json:"provider"`
	Status        *string        `json:"status"`
	To            *string        `json:"to"`
	TotalPrice    *float64       `json:"total_price"`
}
