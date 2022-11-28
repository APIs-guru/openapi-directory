import { SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
export declare enum ListResponseErrorCodeEnum {
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
 * Response message for the List call.
**/
export declare class ListResponse extends SpeakeasyBase {
    debugString?: string;
    errorCode?: ListResponseErrorCodeEnum[];
    maxAge?: string;
    statements?: Statement[];
}
