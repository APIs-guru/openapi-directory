package shared

type BulkCheckResponseBulkErrorCodeEnum string

const (
	BulkCheckResponseBulkErrorCodeEnumErrorCodeUnspecified                 BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeInvalidQuery                BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_INVALID_QUERY"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeFetchError                  BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_FETCH_ERROR"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeFailedSslValidation         BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_FAILED_SSL_VALIDATION"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeRedirect                    BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_REDIRECT"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeTooLarge                    BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_TOO_LARGE"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeMalformedHTTPResponse       BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_MALFORMED_HTTP_RESPONSE"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeWrongContentType            BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_WRONG_CONTENT_TYPE"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeMalformedContent            BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_MALFORMED_CONTENT"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeSecureAssetIncludesInsecure BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE"
	BulkCheckResponseBulkErrorCodeEnumErrorCodeFetchBudgetExhausted        BulkCheckResponseBulkErrorCodeEnum = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"
)

type BulkCheckResponse struct {
	BulkErrorCode *BulkCheckResponseBulkErrorCodeEnum `json:"bulkErrorCode"`
	CheckResults  []CheckResponse                     `json:"checkResults"`
}
