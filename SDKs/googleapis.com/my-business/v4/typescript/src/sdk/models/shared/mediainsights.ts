import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MediaInsights
/** 
 * Insights and statistics for the media item.
**/
export class MediaInsights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
