import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoRatingRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}


// VideoRating
/** 
 * Basic details about rating of a video.
**/
export class VideoRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: VideoRatingRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
