import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VoiceSelectionParams } from "./googleclouddialogflowcxv3beta1voiceselectionparams";
/**
 * Configuration of how speech should be synthesized.
**/
export declare class GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig extends SpeakeasyBase {
    effectsProfileId?: string[];
    pitch?: number;
    speakingRate?: number;
    voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
    volumeGainDb?: number;
}
