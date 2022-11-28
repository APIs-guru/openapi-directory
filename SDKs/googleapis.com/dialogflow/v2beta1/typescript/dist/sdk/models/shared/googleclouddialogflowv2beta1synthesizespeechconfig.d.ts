import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1VoiceSelectionParams } from "./googleclouddialogflowv2beta1voiceselectionparams";
/**
 * Configuration of how speech should be synthesized.
**/
export declare class GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig extends SpeakeasyBase {
    effectsProfileId?: string[];
    pitch?: number;
    speakingRate?: number;
    voice?: GoogleCloudDialogflowV2beta1VoiceSelectionParams;
    volumeGainDb?: number;
}
