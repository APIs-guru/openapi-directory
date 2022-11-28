package shared

type CustomEventErrorCodeEnum string

const (
	CustomEventErrorCodeEnumUnknown          CustomEventErrorCodeEnum = "UNKNOWN"
	CustomEventErrorCodeEnumInvalidArgument  CustomEventErrorCodeEnum = "INVALID_ARGUMENT"
	CustomEventErrorCodeEnumInternal         CustomEventErrorCodeEnum = "INTERNAL"
	CustomEventErrorCodeEnumPermissionDenied CustomEventErrorCodeEnum = "PERMISSION_DENIED"
	CustomEventErrorCodeEnumNotFound         CustomEventErrorCodeEnum = "NOT_FOUND"
)

// CustomEventError
// The error code and description for a custom event that failed to insert.
type CustomEventError struct {
	Code    *CustomEventErrorCodeEnum `json:"code,omitempty"`
	Kind    *string                   `json:"kind,omitempty"`
	Message *string                   `json:"message,omitempty"`
}
