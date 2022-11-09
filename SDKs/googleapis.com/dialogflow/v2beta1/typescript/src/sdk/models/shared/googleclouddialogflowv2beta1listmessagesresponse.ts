import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";


// GoogleCloudDialogflowV2beta1ListMessagesResponse
/** 
 * The response message for Conversations.ListMessages.
**/
export class GoogleCloudDialogflowV2beta1ListMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowV2beta1Message })
  messages?: GoogleCloudDialogflowV2beta1Message[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
