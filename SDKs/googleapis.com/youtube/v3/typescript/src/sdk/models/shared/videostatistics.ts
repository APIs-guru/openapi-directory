import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoStatistics
/** 
 * Statistics about the video, such as the number of times the video was viewed or liked.
**/
export class VideoStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentCount" })
  commentCount?: string;

  @SpeakeasyMetadata({ data: "json, name=dislikeCount" })
  dislikeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=favoriteCount" })
  favoriteCount?: string;

  @SpeakeasyMetadata({ data: "json, name=likeCount" })
  likeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
