package shared

type RequestOptionsPriorityEnum string

const (
	RequestOptionsPriorityEnumPriorityUnspecified RequestOptionsPriorityEnum = "PRIORITY_UNSPECIFIED"
	RequestOptionsPriorityEnumPriorityLow         RequestOptionsPriorityEnum = "PRIORITY_LOW"
	RequestOptionsPriorityEnumPriorityMedium      RequestOptionsPriorityEnum = "PRIORITY_MEDIUM"
	RequestOptionsPriorityEnumPriorityHigh        RequestOptionsPriorityEnum = "PRIORITY_HIGH"
)

type RequestOptions struct {
	Priority       *RequestOptionsPriorityEnum `json:"priority"`
	RequestTag     *string                     `json:"requestTag"`
	TransactionTag *string                     `json:"transactionTag"`
}
