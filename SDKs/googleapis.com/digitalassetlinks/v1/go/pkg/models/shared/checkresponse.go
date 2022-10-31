package shared

type CheckResponseErrorCodeEnum string

const (
	CheckResponseErrorCodeEnumErrorCodeUnspecified                 CheckResponseErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	CheckResponseErrorCodeEnumErrorCodeInvalidQuery                CheckResponseErrorCodeEnum = "ERROR_CODE_INVALID_QUERY"
	CheckResponseErrorCodeEnumErrorCodeFetchError                  CheckResponseErrorCodeEnum = "ERROR_CODE_FETCH_ERROR"
	CheckResponseErrorCodeEnumErrorCodeFailedSslValidation         CheckResponseErrorCodeEnum = "ERROR_CODE_FAILED_SSL_VALIDATION"
	CheckResponseErrorCodeEnumErrorCodeRedirect                    CheckResponseErrorCodeEnum = "ERROR_CODE_REDIRECT"
	CheckResponseErrorCodeEnumErrorCodeTooLarge                    CheckResponseErrorCodeEnum = "ERROR_CODE_TOO_LARGE"
	CheckResponseErrorCodeEnumErrorCodeMalformedHTTPResponse       CheckResponseErrorCodeEnum = "ERROR_CODE_MALFORMED_HTTP_RESPONSE"
	CheckResponseErrorCodeEnumErrorCodeWrongContentType            CheckResponseErrorCodeEnum = "ERROR_CODE_WRONG_CONTENT_TYPE"
	CheckResponseErrorCodeEnumErrorCodeMalformedContent            CheckResponseErrorCodeEnum = "ERROR_CODE_MALFORMED_CONTENT"
	CheckResponseErrorCodeEnumErrorCodeSecureAssetIncludesInsecure CheckResponseErrorCodeEnum = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE"
	CheckResponseErrorCodeEnumErrorCodeFetchBudgetExhausted        CheckResponseErrorCodeEnum = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"
)

type CheckResponse struct {
	DebugString *string                      `json:"debugString,omitempty"`
	ErrorCode   []CheckResponseErrorCodeEnum `json:"errorCode,omitempty"`
	Linked      *bool                        `json:"linked,omitempty"`
	MaxAge      *string                      `json:"maxAge,omitempty"`
}
