import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorAuthenticationFailedAccountBalance
/** 
 * Authentication Failed
**/
export class ErrorAuthenticationFailedAccountBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: any;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
