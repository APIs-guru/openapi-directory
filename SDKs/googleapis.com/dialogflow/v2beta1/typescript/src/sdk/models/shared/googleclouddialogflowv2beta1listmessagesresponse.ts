import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";



// GoogleCloudDialogflowV2beta1ListMessagesResponse
/** 
 * The response message for Conversations.ListMessages.
**/
export class GoogleCloudDialogflowV2beta1ListMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1Message })
  messages?: GoogleCloudDialogflowV2beta1Message[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
