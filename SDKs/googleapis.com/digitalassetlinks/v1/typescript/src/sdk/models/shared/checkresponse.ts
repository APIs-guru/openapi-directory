import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckResponseErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED"
,    ErrorCodeInvalidQuery = "ERROR_CODE_INVALID_QUERY"
,    ErrorCodeFetchError = "ERROR_CODE_FETCH_ERROR"
,    ErrorCodeFailedSslValidation = "ERROR_CODE_FAILED_SSL_VALIDATION"
,    ErrorCodeRedirect = "ERROR_CODE_REDIRECT"
,    ErrorCodeTooLarge = "ERROR_CODE_TOO_LARGE"
,    ErrorCodeMalformedHttpResponse = "ERROR_CODE_MALFORMED_HTTP_RESPONSE"
,    ErrorCodeWrongContentType = "ERROR_CODE_WRONG_CONTENT_TYPE"
,    ErrorCodeMalformedContent = "ERROR_CODE_MALFORMED_CONTENT"
,    ErrorCodeSecureAssetIncludesInsecure = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE"
,    ErrorCodeFetchBudgetExhausted = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"
}


// CheckResponse
/** 
 * Response message for the CheckAssetLinks call.
**/
export class CheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugString" })
  debugString?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: CheckResponseErrorCodeEnum[];

  @Metadata({ data: "json, name=linked" })
  linked?: boolean;

  @Metadata({ data: "json, name=maxAge" })
  maxAge?: string;
}
