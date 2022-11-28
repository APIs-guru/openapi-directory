import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VoiceSelectionParams } from "./googleclouddialogflowcxv3beta1voiceselectionparams";



// GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;

  @SpeakeasyMetadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
