import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio
/** 
 * Plays audio from a file in Telephony Gateway.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
