import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Identifies which input file, track, and channel should be used.
**/
export declare class AudioChannelInput extends SpeakeasyBase {
    channel?: number;
    gainDb?: number;
    key?: string;
    track?: number;
}
