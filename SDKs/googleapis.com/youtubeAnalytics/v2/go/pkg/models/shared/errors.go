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

// Errors
// Request Error information. The presence of an error field signals that the operation has failed.
type Errors struct {
	Code      *ErrorsCodeEnum `json:"code,omitempty"`
	Error     []ErrorProto    `json:"error,omitempty"`
	RequestID *string         `json:"requestId,omitempty"`
}
