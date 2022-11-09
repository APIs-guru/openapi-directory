import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * VP9 codec settings.
**/
export declare class Vp9CodecSettings extends SpeakeasyBase {
    bitrateBps?: number;
    crfLevel?: number;
    frameRate?: number;
    gopDuration?: string;
    gopFrameCount?: number;
    heightPixels?: number;
    pixelFormat?: string;
    profile?: string;
    rateControlMode?: string;
    widthPixels?: number;
}
