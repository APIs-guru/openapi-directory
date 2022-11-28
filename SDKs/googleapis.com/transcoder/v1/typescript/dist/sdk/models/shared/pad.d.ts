import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
**/
export declare class Pad extends SpeakeasyBase {
    bottomPixels?: number;
    leftPixels?: number;
    rightPixels?: number;
    topPixels?: number;
}
