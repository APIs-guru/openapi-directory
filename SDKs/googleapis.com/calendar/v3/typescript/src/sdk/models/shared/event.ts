import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventAttachment } from "./eventattachment";
import { EventAttendee } from "./eventattendee";
import { ConferenceData } from "./conferencedata";
import { EventDateTime } from "./eventdatetime";
import { EventDateTime } from "./eventdatetime";
import { EventReminder } from "./eventreminder";
import { EventDateTime } from "./eventdatetime";


// EventCreator
/** 
 * The creator of the event. Read-only.
**/
export class EventCreator extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=self" })
  self?: boolean;
}


// EventExtendedProperties
/** 
 * Extended properties of the event.
**/
export class EventExtendedProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=private" })
  private?: Map<string, string>;

  @Metadata({ data: "json, name=shared" })
  shared?: Map<string, string>;
}


// EventGadget
/** 
 * A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
**/
export class EventGadget extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=preferences" })
  preferences?: Map<string, string>;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// EventOrganizer
/** 
 * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
**/
export class EventOrganizer extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=self" })
  self?: boolean;
}


// EventReminders
/** 
 * Information about the event's reminders for the authenticated user.
**/
export class EventReminders extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrides", elemType: shared.EventReminder })
  overrides?: EventReminder[];

  @Metadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}


// EventSource
/** 
 * Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
**/
export class EventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=anyoneCanAddSelf" })
  anyoneCanAddSelf?: boolean;

  @Metadata({ data: "json, name=attachments", elemType: shared.EventAttachment })
  attachments?: EventAttachment[];

  @Metadata({ data: "json, name=attendees", elemType: shared.EventAttendee })
  attendees?: EventAttendee[];

  @Metadata({ data: "json, name=attendeesOmitted" })
  attendeesOmitted?: boolean;

  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=conferenceData" })
  conferenceData?: ConferenceData;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=creator" })
  creator?: EventCreator;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=end" })
  end?: EventDateTime;

  @Metadata({ data: "json, name=endTimeUnspecified" })
  endTimeUnspecified?: boolean;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=extendedProperties" })
  extendedProperties?: EventExtendedProperties;

  @Metadata({ data: "json, name=gadget" })
  gadget?: EventGadget;

  @Metadata({ data: "json, name=guestsCanInviteOthers" })
  guestsCanInviteOthers?: boolean;

  @Metadata({ data: "json, name=guestsCanModify" })
  guestsCanModify?: boolean;

  @Metadata({ data: "json, name=guestsCanSeeOtherGuests" })
  guestsCanSeeOtherGuests?: boolean;

  @Metadata({ data: "json, name=hangoutLink" })
  hangoutLink?: string;

  @Metadata({ data: "json, name=htmlLink" })
  htmlLink?: string;

  @Metadata({ data: "json, name=iCalUID" })
  iCalUid?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=organizer" })
  organizer?: EventOrganizer;

  @Metadata({ data: "json, name=originalStartTime" })
  originalStartTime?: EventDateTime;

  @Metadata({ data: "json, name=privateCopy" })
  privateCopy?: boolean;

  @Metadata({ data: "json, name=recurrence" })
  recurrence?: string[];

  @Metadata({ data: "json, name=recurringEventId" })
  recurringEventId?: string;

  @Metadata({ data: "json, name=reminders" })
  reminders?: EventReminders;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=source" })
  source?: EventSource;

  @Metadata({ data: "json, name=start" })
  start?: EventDateTime;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=transparency" })
  transparency?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;
}
