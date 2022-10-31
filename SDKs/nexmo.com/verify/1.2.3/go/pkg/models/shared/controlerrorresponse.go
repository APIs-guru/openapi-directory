package shared

type ControlErrorResponseStatusEnum string

const (
	ControlErrorResponseStatusEnumZero     ControlErrorResponseStatusEnum = "0"
	ControlErrorResponseStatusEnumOne      ControlErrorResponseStatusEnum = "1"
	ControlErrorResponseStatusEnumTwo      ControlErrorResponseStatusEnum = "2"
	ControlErrorResponseStatusEnumThree    ControlErrorResponseStatusEnum = "3"
	ControlErrorResponseStatusEnumFour     ControlErrorResponseStatusEnum = "4"
	ControlErrorResponseStatusEnumFive     ControlErrorResponseStatusEnum = "5"
	ControlErrorResponseStatusEnumSix      ControlErrorResponseStatusEnum = "6"
	ControlErrorResponseStatusEnumEight    ControlErrorResponseStatusEnum = "8"
	ControlErrorResponseStatusEnumNine     ControlErrorResponseStatusEnum = "9"
	ControlErrorResponseStatusEnumNineteen ControlErrorResponseStatusEnum = "19"
)

type ControlErrorResponse struct {
	ErrorText *string                         `json:"error_text,omitempty"`
	Status    *ControlErrorResponseStatusEnum `json:"status,omitempty"`
}
