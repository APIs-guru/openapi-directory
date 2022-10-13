package shared

type SearchResponseChecksStatusEnum string

const (
	SearchResponseChecksStatusEnumValid   SearchResponseChecksStatusEnum = "VALID"
	SearchResponseChecksStatusEnumInvalid SearchResponseChecksStatusEnum = "INVALID"
)

type SearchResponseChecks struct {
	Code         *string                         `json:"code"`
	DateReceived *string                         `json:"date_received"`
	IPAddress    *string                         `json:"ip_address"`
	Status       *SearchResponseChecksStatusEnum `json:"status"`
}

type SearchResponseEventsTypeEnum string

const (
	SearchResponseEventsTypeEnumTts SearchResponseEventsTypeEnum = "tts"
	SearchResponseEventsTypeEnumSms SearchResponseEventsTypeEnum = "sms"
)

type SearchResponseEvents struct {
	ID   *string                       `json:"id"`
	Type *SearchResponseEventsTypeEnum `json:"type"`
}

type SearchResponseStatusEnum string

const (
	SearchResponseStatusEnumInProgress SearchResponseStatusEnum = "IN PROGRESS"
	SearchResponseStatusEnumSuccess    SearchResponseStatusEnum = "SUCCESS"
	SearchResponseStatusEnumFailed     SearchResponseStatusEnum = "FAILED"
	SearchResponseStatusEnumExpired    SearchResponseStatusEnum = "EXPIRED"
	SearchResponseStatusEnumCancelled  SearchResponseStatusEnum = "CANCELLED"
)

type SearchResponse struct {
	AccountID                  *string                   `json:"account_id"`
	Checks                     []SearchResponseChecks    `json:"checks"`
	Currency                   *string                   `json:"currency"`
	DateFinalized              *string                   `json:"date_finalized"`
	DateSubmitted              *string                   `json:"date_submitted"`
	EstimatedPriceMessagesSent *string                   `json:"estimated_price_messages_sent"`
	Events                     []SearchResponseEvents    `json:"events"`
	FirstEventDate             *string                   `json:"first_event_date"`
	LastEventDate              *string                   `json:"last_event_date"`
	Number                     *string                   `json:"number"`
	Price                      *string                   `json:"price"`
	RequestID                  *string                   `json:"request_id"`
	SenderID                   *string                   `json:"sender_id"`
	Status                     *SearchResponseStatusEnum `json:"status"`
}
