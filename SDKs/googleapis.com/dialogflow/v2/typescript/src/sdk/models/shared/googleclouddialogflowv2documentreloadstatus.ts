import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleCloudDialogflowV2DocumentReloadStatus
/** 
 * The status of a reload attempt.
**/
export class GoogleCloudDialogflowV2DocumentReloadStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
