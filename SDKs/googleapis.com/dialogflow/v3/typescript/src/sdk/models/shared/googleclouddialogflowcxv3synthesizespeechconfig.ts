import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VoiceSelectionParams } from "./googleclouddialogflowcxv3voiceselectionparams";



// GoogleCloudDialogflowCxV3SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowCxV3SynthesizeSpeechConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowCxV3VoiceSelectionParams;

  @SpeakeasyMetadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
