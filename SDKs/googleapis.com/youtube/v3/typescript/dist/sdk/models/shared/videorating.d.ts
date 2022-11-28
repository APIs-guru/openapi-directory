import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoRatingRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
/**
 * Basic details about rating of a video.
**/
export declare class VideoRating extends SpeakeasyBase {
    rating?: VideoRatingRatingEnum;
    videoId?: string;
}
