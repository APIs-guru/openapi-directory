import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2VoiceSelectionParams } from "./googleclouddialogflowv2voiceselectionparams";



// GoogleCloudDialogflowV2SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowV2SynthesizeSpeechConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowV2VoiceSelectionParams;

  @SpeakeasyMetadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
