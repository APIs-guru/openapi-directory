import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VideoRatingRatingEnum {
    None = "none"
,    Like = "like"
,    Dislike = "dislike"
}


// VideoRating
/** 
 * Basic details about rating of a video.
**/
export class VideoRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=rating" })
  rating?: VideoRatingRatingEnum;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
