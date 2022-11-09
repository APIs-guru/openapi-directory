import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorAuthenticationFailed
/** 
 * Authentication Failed
**/
export class ErrorAuthenticationFailed extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: any;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
