import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * H265 codec settings.
**/
export declare class H265CodecSettings extends SpeakeasyBase {
    allowOpenGop?: boolean;
    aqStrength?: number;
    bFrameCount?: number;
    bPyramid?: boolean;
    bitrateBps?: number;
    crfLevel?: number;
    enableTwoPass?: boolean;
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
