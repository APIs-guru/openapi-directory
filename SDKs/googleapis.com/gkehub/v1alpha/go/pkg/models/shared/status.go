package shared

type StatusCodeEnum string

const (
	StatusCodeEnumCodeUnspecified StatusCodeEnum = "CODE_UNSPECIFIED"
	StatusCodeEnumOk              StatusCodeEnum = "OK"
	StatusCodeEnumFailed          StatusCodeEnum = "FAILED"
	StatusCodeEnumUnknown         StatusCodeEnum = "UNKNOWN"
)

type Status struct {
	Code        *StatusCodeEnum `json:"code"`
	Description *string         `json:"description"`
}
