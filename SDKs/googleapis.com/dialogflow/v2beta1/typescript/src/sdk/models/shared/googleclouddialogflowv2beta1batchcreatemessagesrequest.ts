import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1CreateMessageRequest } from "./googleclouddialogflowv2beta1createmessagerequest";


// GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest
/** 
 * The request message for Conversations.BatchCreateMessagesRequest.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudDialogflowV2beta1CreateMessageRequest })
  requests?: GoogleCloudDialogflowV2beta1CreateMessageRequest[];
}
