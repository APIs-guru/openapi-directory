package shared

type ListResponseErrorCodeEnum string

const (
	ListResponseErrorCodeEnumErrorCodeUnspecified                 ListResponseErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	ListResponseErrorCodeEnumErrorCodeInvalidQuery                ListResponseErrorCodeEnum = "ERROR_CODE_INVALID_QUERY"
	ListResponseErrorCodeEnumErrorCodeFetchError                  ListResponseErrorCodeEnum = "ERROR_CODE_FETCH_ERROR"
	ListResponseErrorCodeEnumErrorCodeFailedSslValidation         ListResponseErrorCodeEnum = "ERROR_CODE_FAILED_SSL_VALIDATION"
	ListResponseErrorCodeEnumErrorCodeRedirect                    ListResponseErrorCodeEnum = "ERROR_CODE_REDIRECT"
	ListResponseErrorCodeEnumErrorCodeTooLarge                    ListResponseErrorCodeEnum = "ERROR_CODE_TOO_LARGE"
	ListResponseErrorCodeEnumErrorCodeMalformedHTTPResponse       ListResponseErrorCodeEnum = "ERROR_CODE_MALFORMED_HTTP_RESPONSE"
	ListResponseErrorCodeEnumErrorCodeWrongContentType            ListResponseErrorCodeEnum = "ERROR_CODE_WRONG_CONTENT_TYPE"
	ListResponseErrorCodeEnumErrorCodeMalformedContent            ListResponseErrorCodeEnum = "ERROR_CODE_MALFORMED_CONTENT"
	ListResponseErrorCodeEnumErrorCodeSecureAssetIncludesInsecure ListResponseErrorCodeEnum = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE"
	ListResponseErrorCodeEnumErrorCodeFetchBudgetExhausted        ListResponseErrorCodeEnum = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"
)

type ListResponse struct {
	DebugString *string                     `json:"debugString,omitempty"`
	ErrorCode   []ListResponseErrorCodeEnum `json:"errorCode,omitempty"`
	MaxAge      *string                     `json:"maxAge,omitempty"`
	Statements  []Statement                 `json:"statements,omitempty"`
}
