import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoStatistics
/** 
 * Statistics about the video, such as the number of times the video was viewed or liked.
**/
export class VideoStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentCount" })
  commentCount?: string;

  @Metadata({ data: "json, name=dislikeCount" })
  dislikeCount?: string;

  @Metadata({ data: "json, name=favoriteCount" })
  favoriteCount?: string;

  @Metadata({ data: "json, name=likeCount" })
  likeCount?: string;

  @Metadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
