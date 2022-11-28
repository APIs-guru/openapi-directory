import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorAuthenticationFailedAccountBalance
/** 
 * Authentication Failed
**/
export class ErrorAuthenticationFailedAccountBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: any;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
