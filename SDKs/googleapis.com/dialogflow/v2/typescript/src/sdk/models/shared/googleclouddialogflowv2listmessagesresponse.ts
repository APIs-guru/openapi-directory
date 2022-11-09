import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";


// GoogleCloudDialogflowV2ListMessagesResponse
/** 
 * The response message for Conversations.ListMessages.
**/
export class GoogleCloudDialogflowV2ListMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowV2Message })
  messages?: GoogleCloudDialogflowV2Message[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
