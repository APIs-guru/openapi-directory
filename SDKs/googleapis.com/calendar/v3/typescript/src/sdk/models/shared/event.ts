import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventAttachment } from "./eventattachment";
import { EventAttendee } from "./eventattendee";
import { ConferenceData } from "./conferencedata";
import { EventDateTime } from "./eventdatetime";
import { EventReminder } from "./eventreminder";



// EventCreator
/** 
 * The creator of the event. Read-only.
**/
export class EventCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: boolean;
}


// EventExtendedProperties
/** 
 * Extended properties of the event.
**/
export class EventExtendedProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared?: Map<string, string>;
}


// EventGadget
/** 
 * A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
**/
export class EventGadget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// EventOrganizer
/** 
 * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
**/
export class EventOrganizer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: boolean;
}


// EventReminders
/** 
 * Information about the event's reminders for the authenticated user.
**/
export class EventReminders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: EventReminder })
  overrides?: EventReminder[];

  @SpeakeasyMetadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}


// EventSource
/** 
 * Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
**/
export class EventSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anyoneCanAddSelf" })
  anyoneCanAddSelf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: EventAttachment })
  attachments?: EventAttachment[];

  @SpeakeasyMetadata({ data: "json, name=attendees", elemType: EventAttendee })
  attendees?: EventAttendee[];

  @SpeakeasyMetadata({ data: "json, name=attendeesOmitted" })
  attendeesOmitted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=conferenceData" })
  conferenceData?: ConferenceData;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: EventCreator;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: EventDateTime;

  @SpeakeasyMetadata({ data: "json, name=endTimeUnspecified" })
  endTimeUnspecified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedProperties" })
  extendedProperties?: EventExtendedProperties;

  @SpeakeasyMetadata({ data: "json, name=gadget" })
  gadget?: EventGadget;

  @SpeakeasyMetadata({ data: "json, name=guestsCanInviteOthers" })
  guestsCanInviteOthers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guestsCanModify" })
  guestsCanModify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guestsCanSeeOtherGuests" })
  guestsCanSeeOtherGuests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hangoutLink" })
  hangoutLink?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlLink" })
  htmlLink?: string;

  @SpeakeasyMetadata({ data: "json, name=iCalUID" })
  iCalUid?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=organizer" })
  organizer?: EventOrganizer;

  @SpeakeasyMetadata({ data: "json, name=originalStartTime" })
  originalStartTime?: EventDateTime;

  @SpeakeasyMetadata({ data: "json, name=privateCopy" })
  privateCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: string[];

  @SpeakeasyMetadata({ data: "json, name=recurringEventId" })
  recurringEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=reminders" })
  reminders?: EventReminders;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: EventSource;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: EventDateTime;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=transparency" })
  transparency?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;
}
