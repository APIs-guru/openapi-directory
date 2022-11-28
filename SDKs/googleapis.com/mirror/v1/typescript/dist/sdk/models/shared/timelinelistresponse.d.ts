import { SpeakeasyBase } from "../../../internal/utils";
import { TimelineItem } from "./timelineitem";
/**
 * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
**/
export declare class TimelineListResponse extends SpeakeasyBase {
    items?: TimelineItem[];
    kind?: string;
    nextPageToken?: string;
}
