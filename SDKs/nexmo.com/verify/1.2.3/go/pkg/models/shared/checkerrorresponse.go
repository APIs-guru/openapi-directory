package shared

type CheckErrorResponseStatusEnum string

const (
	CheckErrorResponseStatusEnumZero      CheckErrorResponseStatusEnum = "0"
	CheckErrorResponseStatusEnumOne       CheckErrorResponseStatusEnum = "1"
	CheckErrorResponseStatusEnumTwo       CheckErrorResponseStatusEnum = "2"
	CheckErrorResponseStatusEnumThree     CheckErrorResponseStatusEnum = "3"
	CheckErrorResponseStatusEnumFour      CheckErrorResponseStatusEnum = "4"
	CheckErrorResponseStatusEnumFive      CheckErrorResponseStatusEnum = "5"
	CheckErrorResponseStatusEnumSix       CheckErrorResponseStatusEnum = "6"
	CheckErrorResponseStatusEnumSixteen   CheckErrorResponseStatusEnum = "16"
	CheckErrorResponseStatusEnumSeventeen CheckErrorResponseStatusEnum = "17"
)

type CheckErrorResponse struct {
	ErrorText *string                       `json:"error_text"`
	RequestID *string                       `json:"request_id"`
	Status    *CheckErrorResponseStatusEnum `json:"status"`
}
