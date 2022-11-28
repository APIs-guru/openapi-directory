import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * Represents information about the transcoded audio or video file.
**/
export declare class Transcode extends SpeakeasyBase {
    audioBitRateKbps?: string;
    audioSampleRateHz?: string;
    bitRateKbps?: string;
    dimensions?: Dimensions;
    fileSizeBytes?: string;
    frameRate?: number;
    mimeType?: string;
    name?: string;
    transcoded?: boolean;
}
