import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";
/**
 * The top-level message sent by the client for the `SynthesizeSpeech` method.
**/
export declare class SynthesizeSpeechRequest extends SpeakeasyBase {
    audioConfig?: AudioConfig;
    input?: SynthesisInput;
    voice?: VoiceSelectionParams;
}
