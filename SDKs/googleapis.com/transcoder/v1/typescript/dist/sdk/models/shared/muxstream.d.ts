import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentSettings } from "./segmentsettings";
/**
 * Multiplexing settings for output stream.
**/
export declare class MuxStream extends SpeakeasyBase {
    container?: string;
    elementaryStreams?: string[];
    fileName?: string;
    key?: string;
    segmentSettings?: SegmentSettings;
}
