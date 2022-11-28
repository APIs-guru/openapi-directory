import { SpeakeasyBase } from "../../../internal/utils";
import { EventAttachment } from "./eventattachment";
import { EventAttendee } from "./eventattendee";
import { ConferenceData } from "./conferencedata";
import { EventDateTime } from "./eventdatetime";
import { EventReminder } from "./eventreminder";
/**
 * The creator of the event. Read-only.
**/
export declare class EventCreator extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    id?: string;
    self?: boolean;
}
/**
 * Extended properties of the event.
**/
export declare class EventExtendedProperties extends SpeakeasyBase {
    private?: Map<string, string>;
    shared?: Map<string, string>;
}
/**
 * A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
**/
export declare class EventGadget extends SpeakeasyBase {
    display?: string;
    height?: number;
    iconLink?: string;
    link?: string;
    preferences?: Map<string, string>;
    title?: string;
    type?: string;
    width?: number;
}
/**
 * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
**/
export declare class EventOrganizer extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    id?: string;
    self?: boolean;
}
/**
 * Information about the event's reminders for the authenticated user.
**/
export declare class EventReminders extends SpeakeasyBase {
    overrides?: EventReminder[];
    useDefault?: boolean;
}
/**
 * Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
**/
export declare class EventSource extends SpeakeasyBase {
    title?: string;
    url?: string;
}
export declare class Event extends SpeakeasyBase {
    anyoneCanAddSelf?: boolean;
    attachments?: EventAttachment[];
    attendees?: EventAttendee[];
    attendeesOmitted?: boolean;
    colorId?: string;
    conferenceData?: ConferenceData;
    created?: Date;
    creator?: EventCreator;
    description?: string;
    end?: EventDateTime;
    endTimeUnspecified?: boolean;
    etag?: string;
    eventType?: string;
    extendedProperties?: EventExtendedProperties;
    gadget?: EventGadget;
    guestsCanInviteOthers?: boolean;
    guestsCanModify?: boolean;
    guestsCanSeeOtherGuests?: boolean;
    hangoutLink?: string;
    htmlLink?: string;
    iCalUid?: string;
    id?: string;
    kind?: string;
    location?: string;
    locked?: boolean;
    organizer?: EventOrganizer;
    originalStartTime?: EventDateTime;
    privateCopy?: boolean;
    recurrence?: string[];
    recurringEventId?: string;
    reminders?: EventReminders;
    sequence?: number;
    source?: EventSource;
    start?: EventDateTime;
    status?: string;
    summary?: string;
    transparency?: string;
    updated?: Date;
    visibility?: string;
}
