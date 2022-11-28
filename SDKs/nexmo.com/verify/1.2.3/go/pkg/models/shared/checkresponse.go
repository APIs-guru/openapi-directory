package shared

// CheckResponse
// Success
type CheckResponse struct {
	Currency                   *string `json:"currency,omitempty"`
	EstimatedPriceMessagesSent *string `json:"estimated_price_messages_sent,omitempty"`
	EventID                    *string `json:"event_id,omitempty"`
	Price                      *string `json:"price,omitempty"`
	RequestID                  *string `json:"request_id,omitempty"`
	Status                     *string `json:"status,omitempty"`
}
