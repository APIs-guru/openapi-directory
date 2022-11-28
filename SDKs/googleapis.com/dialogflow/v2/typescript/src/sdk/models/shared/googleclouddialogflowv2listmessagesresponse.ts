import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";



// GoogleCloudDialogflowV2ListMessagesResponse
/** 
 * The response message for Conversations.ListMessages.
**/
export class GoogleCloudDialogflowV2ListMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2Message })
  messages?: GoogleCloudDialogflowV2Message[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
