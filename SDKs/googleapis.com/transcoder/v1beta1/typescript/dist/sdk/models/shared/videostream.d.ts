import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video stream resource.
**/
export declare class VideoStream extends SpeakeasyBase {
    allowOpenGop?: boolean;
    aqStrength?: number;
    bFrameCount?: number;
    bPyramid?: boolean;
    bitrateBps?: number;
    codec?: string;
    crfLevel?: number;
    enableTwoPass?: boolean;
    entropyCoder?: string;
    frameRate?: number;
    gopDuration?: string;
    gopFrameCount?: number;
    heightPixels?: number;
    pixelFormat?: string;
    preset?: string;
    profile?: string;
    rateControlMode?: string;
    tune?: string;
    vbvFullnessBits?: number;
    vbvSizeBits?: number;
    widthPixels?: number;
}
