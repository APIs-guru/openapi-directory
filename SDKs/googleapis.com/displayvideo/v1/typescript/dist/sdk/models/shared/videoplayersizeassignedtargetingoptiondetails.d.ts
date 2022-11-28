import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum {
    VideoPlayerSizeUnspecified = "VIDEO_PLAYER_SIZE_UNSPECIFIED",
    VideoPlayerSizeSmall = "VIDEO_PLAYER_SIZE_SMALL",
    VideoPlayerSizeLarge = "VIDEO_PLAYER_SIZE_LARGE",
    VideoPlayerSizeHd = "VIDEO_PLAYER_SIZE_HD",
    VideoPlayerSizeUnknown = "VIDEO_PLAYER_SIZE_UNKNOWN"
}
/**
 * Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
**/
export declare class VideoPlayerSizeAssignedTargetingOptionDetails extends SpeakeasyBase {
    targetingOptionId?: string;
    videoPlayerSize?: VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
}
