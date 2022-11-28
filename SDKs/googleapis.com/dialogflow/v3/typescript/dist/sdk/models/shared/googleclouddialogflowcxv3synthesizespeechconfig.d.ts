import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VoiceSelectionParams } from "./googleclouddialogflowcxv3voiceselectionparams";
/**
 * Configuration of how speech should be synthesized.
**/
export declare class GoogleCloudDialogflowCxV3SynthesizeSpeechConfig extends SpeakeasyBase {
    effectsProfileId?: string[];
    pitch?: number;
    speakingRate?: number;
    voice?: GoogleCloudDialogflowCxV3VoiceSelectionParams;
    volumeGainDb?: number;
}
