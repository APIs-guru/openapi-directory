package shared

type SearchErrorResponseStatusEnum string

const (
	SearchErrorResponseStatusEnumInProgress       SearchErrorResponseStatusEnum = "IN PROGRESS"
	SearchErrorResponseStatusEnumFailed           SearchErrorResponseStatusEnum = "FAILED"
	SearchErrorResponseStatusEnumExpired          SearchErrorResponseStatusEnum = "EXPIRED"
	SearchErrorResponseStatusEnumCancelled        SearchErrorResponseStatusEnum = "CANCELLED"
	SearchErrorResponseStatusEnumOneHundredAndOne SearchErrorResponseStatusEnum = "101"
)

// SearchErrorResponse
// Error
type SearchErrorResponse struct {
	ErrorText *string                        `json:"error_text,omitempty"`
	RequestID *string                        `json:"request_id,omitempty"`
	Status    *SearchErrorResponseStatusEnum `json:"status,omitempty"`
}
