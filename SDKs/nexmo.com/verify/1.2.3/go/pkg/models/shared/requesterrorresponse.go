package shared

type RequestErrorResponseStatusEnum string

const (
	RequestErrorResponseStatusEnumZero       RequestErrorResponseStatusEnum = "0"
	RequestErrorResponseStatusEnumOne        RequestErrorResponseStatusEnum = "1"
	RequestErrorResponseStatusEnumTwo        RequestErrorResponseStatusEnum = "2"
	RequestErrorResponseStatusEnumThree      RequestErrorResponseStatusEnum = "3"
	RequestErrorResponseStatusEnumFour       RequestErrorResponseStatusEnum = "4"
	RequestErrorResponseStatusEnumFive       RequestErrorResponseStatusEnum = "5"
	RequestErrorResponseStatusEnumSix        RequestErrorResponseStatusEnum = "6"
	RequestErrorResponseStatusEnumSeven      RequestErrorResponseStatusEnum = "7"
	RequestErrorResponseStatusEnumEight      RequestErrorResponseStatusEnum = "8"
	RequestErrorResponseStatusEnumNine       RequestErrorResponseStatusEnum = "9"
	RequestErrorResponseStatusEnumTen        RequestErrorResponseStatusEnum = "10"
	RequestErrorResponseStatusEnumFifteen    RequestErrorResponseStatusEnum = "15"
	RequestErrorResponseStatusEnumTwenty     RequestErrorResponseStatusEnum = "20"
	RequestErrorResponseStatusEnumTwentyNine RequestErrorResponseStatusEnum = "29"
)

// RequestErrorResponse
// Error
type RequestErrorResponse struct {
	ErrorText *string                         `json:"error_text,omitempty"`
	Network   *string                         `json:"network,omitempty"`
	RequestID *string                         `json:"request_id,omitempty"`
	Status    *RequestErrorResponseStatusEnum `json:"status,omitempty"`
}
