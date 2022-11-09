import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";
import { SegmentSettings } from "./segmentsettings";
/**
 * Multiplexing settings for output stream.
**/
export declare class MuxStream extends SpeakeasyBase {
    container?: string;
    elementaryStreams?: string[];
    encryption?: Encryption;
    fileName?: string;
    key?: string;
    segmentSettings?: SegmentSettings;
}
