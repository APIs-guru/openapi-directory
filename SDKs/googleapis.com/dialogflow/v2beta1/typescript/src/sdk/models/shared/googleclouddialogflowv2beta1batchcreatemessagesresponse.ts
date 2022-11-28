import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";



// GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse
/** 
 * The request message for Conversations.BatchCreateMessagesResponse.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1Message })
  messages?: GoogleCloudDialogflowV2beta1Message[];
}
