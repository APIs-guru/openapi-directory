import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2VoiceSelectionParams } from "./googleclouddialogflowv2voiceselectionparams";
/**
 * Configuration of how speech should be synthesized.
**/
export declare class GoogleCloudDialogflowV2SynthesizeSpeechConfig extends SpeakeasyBase {
    effectsProfileId?: string[];
    pitch?: number;
    speakingRate?: number;
    voice?: GoogleCloudDialogflowV2VoiceSelectionParams;
    volumeGainDb?: number;
}
