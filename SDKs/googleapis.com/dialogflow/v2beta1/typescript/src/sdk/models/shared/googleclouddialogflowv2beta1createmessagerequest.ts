import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1MessageInput } from "./googleclouddialogflowv2beta1message";



// GoogleCloudDialogflowV2beta1CreateMessageRequestInput
/** 
 * The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.
**/
export class GoogleCloudDialogflowV2beta1CreateMessageRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowV2beta1MessageInput;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
