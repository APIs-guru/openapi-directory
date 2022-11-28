import { SpeakeasyBase } from "../../../internal/utils";
import { AudioAtom } from "./audioatom";
/**
 * Audio stream resource.
**/
export declare class AudioStream extends SpeakeasyBase {
    bitrateBps?: number;
    channelCount?: number;
    channelLayout?: string[];
    codec?: string;
    mapping?: AudioAtom[];
    sampleRateHertz?: number;
}
