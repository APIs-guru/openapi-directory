package shared

import (
	"time"
)

type CsvConversations struct {
	AccountID      *string    `json:"account_id"`
	ApplicationID  *string    `json:"application_id"`
	ClientRef      *string    `json:"client_ref"`
	ConversationID *string    `json:"conversation_id"`
	CreationDate   *time.Time `json:"creation_date"`
	Currency       *string    `json:"currency"`
	ID             *string    `json:"id"`
	Price          *float64   `json:"price"`
	RequestID      *string    `json:"request_id"`
	TotalPrice     *float64   `json:"total_price"`
	UserID         *string    `json:"user_id"`
}
