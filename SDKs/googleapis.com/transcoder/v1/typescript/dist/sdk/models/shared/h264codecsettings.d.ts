import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * H264 codec settings.
**/
export declare class H264CodecSettings extends SpeakeasyBase {
    allowOpenGop?: boolean;
    aqStrength?: number;
    bFrameCount?: number;
    bPyramid?: boolean;
    bitrateBps?: number;
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
