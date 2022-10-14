package shared

type CustomEventErrorCodeEnum string

const (
	CustomEventErrorCodeEnumUnknown          CustomEventErrorCodeEnum = "UNKNOWN"
	CustomEventErrorCodeEnumInvalidArgument  CustomEventErrorCodeEnum = "INVALID_ARGUMENT"
	CustomEventErrorCodeEnumInternal         CustomEventErrorCodeEnum = "INTERNAL"
	CustomEventErrorCodeEnumPermissionDenied CustomEventErrorCodeEnum = "PERMISSION_DENIED"
	CustomEventErrorCodeEnumNotFound         CustomEventErrorCodeEnum = "NOT_FOUND"
)

type CustomEventError struct {
	Code    *CustomEventErrorCodeEnum `json:"code,omitempty"`
	Kind    *string                   `json:"kind,omitempty"`
	Message *string                   `json:"message,omitempty"`
}
