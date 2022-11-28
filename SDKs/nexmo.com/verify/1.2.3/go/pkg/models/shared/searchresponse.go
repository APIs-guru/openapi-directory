package shared

type SearchResponseChecksStatusEnum string

const (
	SearchResponseChecksStatusEnumValid   SearchResponseChecksStatusEnum = "VALID"
	SearchResponseChecksStatusEnumInvalid SearchResponseChecksStatusEnum = "INVALID"
)

type SearchResponseChecks struct {
	Code         *string                         `json:"code,omitempty"`
	DateReceived *string                         `json:"date_received,omitempty"`
	IPAddress    *string                         `json:"ip_address,omitempty"`
	Status       *SearchResponseChecksStatusEnum `json:"status,omitempty"`
}

type SearchResponseEventsTypeEnum string

const (
	SearchResponseEventsTypeEnumTts SearchResponseEventsTypeEnum = "tts"
	SearchResponseEventsTypeEnumSms SearchResponseEventsTypeEnum = "sms"
)

type SearchResponseEvents struct {
	ID   *string                       `json:"id,omitempty"`
	Type *SearchResponseEventsTypeEnum `json:"type,omitempty"`
}

type SearchResponseStatusEnum string

const (
	SearchResponseStatusEnumInProgress SearchResponseStatusEnum = "IN PROGRESS"
	SearchResponseStatusEnumSuccess    SearchResponseStatusEnum = "SUCCESS"
	SearchResponseStatusEnumFailed     SearchResponseStatusEnum = "FAILED"
	SearchResponseStatusEnumExpired    SearchResponseStatusEnum = "EXPIRED"
	SearchResponseStatusEnumCancelled  SearchResponseStatusEnum = "CANCELLED"
)

// SearchResponse
// Success
type SearchResponse struct {
	AccountID                  *string                   `json:"account_id,omitempty"`
	Checks                     []SearchResponseChecks    `json:"checks,omitempty"`
	Currency                   *string                   `json:"currency,omitempty"`
	DateFinalized              *string                   `json:"date_finalized,omitempty"`
	DateSubmitted              *string                   `json:"date_submitted,omitempty"`
	EstimatedPriceMessagesSent *string                   `json:"estimated_price_messages_sent,omitempty"`
	Events                     []SearchResponseEvents    `json:"events,omitempty"`
	FirstEventDate             *string                   `json:"first_event_date,omitempty"`
	LastEventDate              *string                   `json:"last_event_date,omitempty"`
	Number                     *string                   `json:"number,omitempty"`
	Price                      *string                   `json:"price,omitempty"`
	RequestID                  *string                   `json:"request_id,omitempty"`
	SenderID                   *string                   `json:"sender_id,omitempty"`
	Status                     *SearchResponseStatusEnum `json:"status,omitempty"`
}
