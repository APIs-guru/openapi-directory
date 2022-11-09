import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MediaInsights
/** 
 * Insights and statistics for the media item.
**/
export class MediaInsights extends SpeakeasyBase {
  @Metadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
