import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1VoiceSelectionParams } from "./googleclouddialogflowcxv3beta1voiceselectionparams";


// GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @Metadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;

  @Metadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
