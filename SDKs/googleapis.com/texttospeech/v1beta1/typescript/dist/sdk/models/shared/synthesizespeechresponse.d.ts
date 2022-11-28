import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { Timepoint } from "./timepoint";
/**
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
export declare class SynthesizeSpeechResponse extends SpeakeasyBase {
    audioConfig?: AudioConfig;
    audioContent?: string;
    timepoints?: Timepoint[];
}
