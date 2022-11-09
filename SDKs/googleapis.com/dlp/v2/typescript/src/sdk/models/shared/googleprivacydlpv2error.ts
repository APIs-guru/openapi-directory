import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GooglePrivacyDlpV2Error
/** 
 * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
**/
export class GooglePrivacyDlpV2Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: GoogleRpcStatus;

  @Metadata({ data: "json, name=timestamps" })
  timestamps?: string[];
}
