import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1CreateMessageRequestInput } from "./googleclouddialogflowv2beta1createmessagerequest";



// GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput
/** 
 * The request message for Conversations.BatchCreateMessagesRequest.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudDialogflowV2beta1CreateMessageRequestInput })
  requests?: GoogleCloudDialogflowV2beta1CreateMessageRequestInput[];
}
