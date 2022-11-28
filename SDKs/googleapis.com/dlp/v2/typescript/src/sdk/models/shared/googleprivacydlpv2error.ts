import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GooglePrivacyDlpV2Error
/** 
 * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
**/
export class GooglePrivacyDlpV2Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=timestamps" })
  timestamps?: string[];
}
