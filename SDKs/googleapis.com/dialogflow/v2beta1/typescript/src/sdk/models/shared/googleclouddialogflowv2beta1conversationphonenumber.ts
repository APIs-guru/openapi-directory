import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1ConversationPhoneNumber
/** 
 * Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.
**/
export class GoogleCloudDialogflowV2beta1ConversationPhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
