import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio
/** 
 * Plays audio from a file in Telephony Gateway.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioUri" })
  audioUri?: string;
}
