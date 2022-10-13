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
	Code    *CustomEventErrorCodeEnum `json:"code"`
	Kind    *string                   `json:"kind"`
	Message *string                   `json:"message"`
}
