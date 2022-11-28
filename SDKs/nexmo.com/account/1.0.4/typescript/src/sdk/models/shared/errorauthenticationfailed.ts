import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorAuthenticationFailed
/** 
 * Authentication Failed
**/
export class ErrorAuthenticationFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: any;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
