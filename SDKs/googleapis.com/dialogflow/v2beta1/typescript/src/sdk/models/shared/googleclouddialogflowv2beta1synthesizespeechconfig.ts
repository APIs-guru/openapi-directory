import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1VoiceSelectionParams } from "./googleclouddialogflowv2beta1voiceselectionparams";



// GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowV2beta1VoiceSelectionParams;

  @SpeakeasyMetadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
