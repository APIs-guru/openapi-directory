package shared

type StatusCodeEnum string

const (
	StatusCodeEnumCodeUnspecified StatusCodeEnum = "CODE_UNSPECIFIED"
	StatusCodeEnumOk              StatusCodeEnum = "OK"
	StatusCodeEnumFailed          StatusCodeEnum = "FAILED"
	StatusCodeEnumUnknown         StatusCodeEnum = "UNKNOWN"
)

// Status
// Status specifies state for the subcomponent.
type Status struct {
	Code        *StatusCodeEnum `json:"code,omitempty"`
	Description *string         `json:"description,omitempty"`
}
