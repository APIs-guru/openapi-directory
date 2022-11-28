import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall
/** 
 * Transfers the call in Telephony Gateway.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
