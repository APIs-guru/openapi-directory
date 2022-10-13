package shared

type CheckResponse struct {
	Currency                   *string `json:"currency"`
	EstimatedPriceMessagesSent *string `json:"estimated_price_messages_sent"`
	EventID                    *string `json:"event_id"`
	Price                      *string `json:"price"`
	RequestID                  *string `json:"request_id"`
	Status                     *string `json:"status"`
}
