import { SpeakeasyBase } from "../../../internal/utils";
import { CheckResponse } from "./checkresponse";
export declare enum BulkCheckResponseBulkErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    ErrorCodeInvalidQuery = "ERROR_CODE_INVALID_QUERY",
    ErrorCodeFetchError = "ERROR_CODE_FETCH_ERROR",
    ErrorCodeFailedSslValidation = "ERROR_CODE_FAILED_SSL_VALIDATION",
    ErrorCodeRedirect = "ERROR_CODE_REDIRECT",
    ErrorCodeTooLarge = "ERROR_CODE_TOO_LARGE",
    ErrorCodeMalformedHttpResponse = "ERROR_CODE_MALFORMED_HTTP_RESPONSE",
    ErrorCodeWrongContentType = "ERROR_CODE_WRONG_CONTENT_TYPE",
    ErrorCodeMalformedContent = "ERROR_CODE_MALFORMED_CONTENT",
    ErrorCodeSecureAssetIncludesInsecure = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE",
    ErrorCodeFetchBudgetExhausted = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"
}
/**
 * Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.
**/
export declare class BulkCheckResponse extends SpeakeasyBase {
    bulkErrorCode?: BulkCheckResponseBulkErrorCodeEnum;
    checkResults?: CheckResponse[];
}
