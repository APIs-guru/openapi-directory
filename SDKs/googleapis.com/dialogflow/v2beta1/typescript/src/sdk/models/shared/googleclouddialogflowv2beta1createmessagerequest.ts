import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";


// GoogleCloudDialogflowV2beta1CreateMessageRequest
/** 
 * The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.
**/
export class GoogleCloudDialogflowV2beta1CreateMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowV2beta1Message;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
