package shared

type SearchErrorResponseStatusEnum string

const (
	SearchErrorResponseStatusEnumInProgress       SearchErrorResponseStatusEnum = "IN PROGRESS"
	SearchErrorResponseStatusEnumFailed           SearchErrorResponseStatusEnum = "FAILED"
	SearchErrorResponseStatusEnumExpired          SearchErrorResponseStatusEnum = "EXPIRED"
	SearchErrorResponseStatusEnumCancelled        SearchErrorResponseStatusEnum = "CANCELLED"
	SearchErrorResponseStatusEnumOneHundredAndOne SearchErrorResponseStatusEnum = "101"
)

type SearchErrorResponse struct {
	ErrorText *string                        `json:"error_text"`
	RequestID *string                        `json:"request_id"`
	Status    *SearchErrorResponseStatusEnum `json:"status"`
}
