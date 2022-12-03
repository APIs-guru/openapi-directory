package shared

type ErrorV1CodeEnum string

const (
	ErrorV1CodeEnumUnauthorized        ErrorV1CodeEnum = "unauthorized"
	ErrorV1CodeEnumNotFound            ErrorV1CodeEnum = "not_found"
	ErrorV1CodeEnumHTTPNotSupported    ErrorV1CodeEnum = "http_not_supported"
	ErrorV1CodeEnumInvalidMethod       ErrorV1CodeEnum = "invalid_method"
	ErrorV1CodeEnumInvalidFormat       ErrorV1CodeEnum = "invalid_format"
	ErrorV1CodeEnumInvalidRequest      ErrorV1CodeEnum = "invalid_request"
	ErrorV1CodeEnumInternalServerError ErrorV1CodeEnum = "internal_server_error"
)

// ErrorV1
// Object containing details about an [error](https://www.heraldapi.com/docs/errors).
type ErrorV1 struct {
	Code    ErrorV1CodeEnum `json:"code"`
	ID      string          `json:"id"`
	Message string          `json:"message"`
}
