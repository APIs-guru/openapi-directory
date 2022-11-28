import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum {
    VideoPlayerSizeUnspecified = "VIDEO_PLAYER_SIZE_UNSPECIFIED",
    VideoPlayerSizeSmall = "VIDEO_PLAYER_SIZE_SMALL",
    VideoPlayerSizeLarge = "VIDEO_PLAYER_SIZE_LARGE",
    VideoPlayerSizeHd = "VIDEO_PLAYER_SIZE_HD",
    VideoPlayerSizeUnknown = "VIDEO_PLAYER_SIZE_UNKNOWN"
}


// VideoPlayerSizeTargetingOptionDetails
/** 
 * Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.
**/
export class VideoPlayerSizeTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoPlayerSize" })
  videoPlayerSize?: VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum;
}
