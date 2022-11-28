import { SpeakeasyBase } from "../../../internal/utils";
import { EventReminder } from "./eventreminder";
import { Event } from "./event";
export declare class Events extends SpeakeasyBase {
    accessRole?: string;
    defaultReminders?: EventReminder[];
    description?: string;
    etag?: string;
    items?: Event[];
    kind?: string;
    nextPageToken?: string;
    nextSyncToken?: string;
    summary?: string;
    timeZone?: string;
    updated?: Date;
}
