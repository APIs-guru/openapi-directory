package shared




type ConversionErrorCodeEnum string

const (
    ConversionErrorCodeEnumInvalidArgument ConversionErrorCodeEnum = "INVALID_ARGUMENT"
ConversionErrorCodeEnumInternal ConversionErrorCodeEnum = "INTERNAL"
ConversionErrorCodeEnumPermissionDenied ConversionErrorCodeEnum = "PERMISSION_DENIED"
ConversionErrorCodeEnumNotFound ConversionErrorCodeEnum = "NOT_FOUND"
)


type ConversionError struct {
    Code *ConversionErrorCodeEnum `json:"code,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

