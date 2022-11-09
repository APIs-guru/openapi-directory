import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorAutoReloadNotEnabled
/** 
 * Auto-Reload not enabled
**/
export class ErrorAutoReloadNotEnabled extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: any;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
