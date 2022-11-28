import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudDialogflowV2DocumentReloadStatus
/** 
 * The status of a reload attempt.
**/
export class GoogleCloudDialogflowV2DocumentReloadStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
