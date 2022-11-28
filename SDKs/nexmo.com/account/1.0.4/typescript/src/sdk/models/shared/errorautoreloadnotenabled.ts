import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorAutoReloadNotEnabled
/** 
 * Auto-Reload not enabled
**/
export class ErrorAutoReloadNotEnabled extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: any;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
