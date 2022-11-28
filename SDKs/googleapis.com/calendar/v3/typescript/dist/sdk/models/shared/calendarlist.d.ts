import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarListEntry } from "./calendarlistentry";
export declare class CalendarList extends SpeakeasyBase {
    etag?: string;
    items?: CalendarListEntry[];
    kind?: string;
    nextPageToken?: string;
    nextSyncToken?: string;
}
