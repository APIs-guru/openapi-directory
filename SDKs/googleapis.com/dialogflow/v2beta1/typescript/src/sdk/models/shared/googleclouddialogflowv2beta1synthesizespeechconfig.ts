import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1VoiceSelectionParams } from "./googleclouddialogflowv2beta1voiceselectionparams";


// GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @Metadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowV2beta1VoiceSelectionParams;

  @Metadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
