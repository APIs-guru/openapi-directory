package shared

type ProcessingErrorCodeEnum string

const (
	ProcessingErrorCodeEnumProcessingErrorCodeUnspecified ProcessingErrorCodeEnum = "PROCESSING_ERROR_CODE_UNSPECIFIED"
	ProcessingErrorCodeEnumMalformedRequest               ProcessingErrorCodeEnum = "MALFORMED_REQUEST"
	ProcessingErrorCodeEnumUnsupportedContentFormat       ProcessingErrorCodeEnum = "UNSUPPORTED_CONTENT_FORMAT"
	ProcessingErrorCodeEnumIndirectBrokenACL              ProcessingErrorCodeEnum = "INDIRECT_BROKEN_ACL"
	ProcessingErrorCodeEnumACLCycle                       ProcessingErrorCodeEnum = "ACL_CYCLE"
)

type ProcessingError struct {
	Code            *ProcessingErrorCodeEnum `json:"code"`
	ErrorMessage    *string                  `json:"errorMessage"`
	FieldViolations []FieldViolation         `json:"fieldViolations"`
}
