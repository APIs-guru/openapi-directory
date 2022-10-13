package shared

type ErrorModelStatusEnum string

const (
	ErrorModelStatusEnumError ErrorModelStatusEnum = "error"
)

type ErrorModel struct {
	API      *string               `json:"api"`
	Method   *string               `json:"method"`
	Response *string               `json:"response"`
	Status   *ErrorModelStatusEnum `json:"status"`
}
