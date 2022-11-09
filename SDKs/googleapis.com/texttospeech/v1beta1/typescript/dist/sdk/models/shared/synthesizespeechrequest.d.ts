import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";
export declare enum SynthesizeSpeechRequestEnableTimePointingEnum {
    TimepointTypeUnspecified = "TIMEPOINT_TYPE_UNSPECIFIED",
    SsmlMark = "SSML_MARK"
}
/**
 * The top-level message sent by the client for the `SynthesizeSpeech` method.
**/
export declare class SynthesizeSpeechRequest extends SpeakeasyBase {
    audioConfig?: AudioConfig;
    enableTimePointing?: SynthesizeSpeechRequestEnableTimePointingEnum[];
    input?: SynthesisInput;
    voice?: VoiceSelectionParams;
}
