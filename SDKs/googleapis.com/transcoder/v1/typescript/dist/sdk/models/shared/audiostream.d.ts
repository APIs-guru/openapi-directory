import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioMapping } from "./audiomapping";
/**
 * Audio stream resource.
**/
export declare class AudioStream extends SpeakeasyBase {
    bitrateBps?: number;
    channelCount?: number;
    channelLayout?: string[];
    codec?: string;
    mapping?: AudioMapping[];
    sampleRateHertz?: number;
}
