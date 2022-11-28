import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1ConversationPhoneNumber
/** 
 * Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.
**/
export class GoogleCloudDialogflowV2beta1ConversationPhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
