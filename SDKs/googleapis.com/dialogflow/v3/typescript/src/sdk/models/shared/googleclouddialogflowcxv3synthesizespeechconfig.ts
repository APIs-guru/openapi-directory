import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3VoiceSelectionParams } from "./googleclouddialogflowcxv3voiceselectionparams";


// GoogleCloudDialogflowCxV3SynthesizeSpeechConfig
/** 
 * Configuration of how speech should be synthesized.
**/
export class GoogleCloudDialogflowCxV3SynthesizeSpeechConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectsProfileId" })
  effectsProfileId?: string[];

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=speakingRate" })
  speakingRate?: number;

  @Metadata({ data: "json, name=voice" })
  voice?: GoogleCloudDialogflowCxV3VoiceSelectionParams;

  @Metadata({ data: "json, name=volumeGainDb" })
  volumeGainDb?: number;
}
