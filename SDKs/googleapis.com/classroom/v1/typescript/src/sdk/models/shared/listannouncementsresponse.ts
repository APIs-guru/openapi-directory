import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Announcement } from "./announcement";


// ListAnnouncementsResponse
/** 
 * Response when listing course work.
**/
export class ListAnnouncementsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcements", elemType: shared.Announcement })
  announcements?: Announcement[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
