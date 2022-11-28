import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Announcement } from "./announcement";



// ListAnnouncementsResponse
/** 
 * Response when listing course work.
**/
export class ListAnnouncementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcements", elemType: Announcement })
  announcements?: Announcement[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
