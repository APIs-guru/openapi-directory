import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";


// GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse
/** 
 * The request message for Conversations.BatchCreateMessagesResponse.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowV2beta1Message })
  messages?: GoogleCloudDialogflowV2beta1Message[];
}
