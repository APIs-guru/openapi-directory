import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2VoiceSelectionParams } from "./googleclouddialogflowv2voiceselectionparams";


// GoogleCloudDialogflowV2SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowV2SynthesizeSpeechConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @Metadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowV2VoiceSelectionParams;

  @Metadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
