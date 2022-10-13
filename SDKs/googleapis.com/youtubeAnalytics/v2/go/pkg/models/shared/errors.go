package shared

type ErrorsCodeEnum string

const (
	ErrorsCodeEnumBadRequest         ErrorsCodeEnum = "BAD_REQUEST"
	ErrorsCodeEnumForbidden          ErrorsCodeEnum = "FORBIDDEN"
	ErrorsCodeEnumNotFound           ErrorsCodeEnum = "NOT_FOUND"
	ErrorsCodeEnumConflict           ErrorsCodeEnum = "CONFLICT"
	ErrorsCodeEnumGone               ErrorsCodeEnum = "GONE"
	ErrorsCodeEnumPreconditionFailed ErrorsCodeEnum = "PRECONDITION_FAILED"
	ErrorsCodeEnumInternalError      ErrorsCodeEnum = "INTERNAL_ERROR"
	ErrorsCodeEnumServiceUnavailable ErrorsCodeEnum = "SERVICE_UNAVAILABLE"
)

type Errors struct {
	Code      *ErrorsCodeEnum `json:"code"`
	Error     []ErrorProto    `json:"error"`
	RequestID *string         `json:"requestId"`
}
