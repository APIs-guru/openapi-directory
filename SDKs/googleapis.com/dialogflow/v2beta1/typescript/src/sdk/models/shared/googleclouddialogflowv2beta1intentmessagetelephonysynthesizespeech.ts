import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech
/** 
 * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
