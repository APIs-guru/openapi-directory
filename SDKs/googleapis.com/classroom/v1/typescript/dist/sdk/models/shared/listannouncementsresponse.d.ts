import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Announcement } from "./announcement";
/**
 * Response when listing course work.
**/
export declare class ListAnnouncementsResponse extends SpeakeasyBase {
    announcements?: Announcement[];
    nextPageToken?: string;
}
