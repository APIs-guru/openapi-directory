import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimelineItem } from "./timelineitem";



// TimelineListResponse
/** 
 * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
**/
export class TimelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TimelineItem })
  items?: TimelineItem[];

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
