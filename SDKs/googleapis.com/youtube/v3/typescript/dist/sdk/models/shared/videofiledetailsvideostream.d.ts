import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoFileDetailsVideoStreamRotationEnum {
    None = "none",
    Clockwise = "clockwise",
    UpsideDown = "upsideDown",
    CounterClockwise = "counterClockwise",
    Other = "other"
}
/**
 * Information about a video stream.
**/
export declare class VideoFileDetailsVideoStream extends SpeakeasyBase {
    aspectRatio?: number;
    bitrateBps?: string;
    codec?: string;
    frameRateFps?: number;
    heightPixels?: number;
    rotation?: VideoFileDetailsVideoStreamRotationEnum;
    vendor?: string;
    widthPixels?: number;
}
