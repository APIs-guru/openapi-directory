package shared

type ConversionErrorCodeEnum string

const (
	ConversionErrorCodeEnumInvalidArgument  ConversionErrorCodeEnum = "INVALID_ARGUMENT"
	ConversionErrorCodeEnumInternal         ConversionErrorCodeEnum = "INTERNAL"
	ConversionErrorCodeEnumPermissionDenied ConversionErrorCodeEnum = "PERMISSION_DENIED"
	ConversionErrorCodeEnumNotFound         ConversionErrorCodeEnum = "NOT_FOUND"
)

type ConversionError struct {
	Code    *ConversionErrorCodeEnum `json:"code"`
	Kind    *string                  `json:"kind"`
	Message *string                  `json:"message"`
}
