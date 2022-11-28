import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ConversationPhoneNumber
/** 
 * Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.
**/
export class GoogleCloudDialogflowV2ConversationPhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
