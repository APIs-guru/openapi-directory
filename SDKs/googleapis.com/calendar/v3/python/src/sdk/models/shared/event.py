from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventCreator:
    r"""EventCreator
    The creator of the event. Read-only.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class EventExtendedProperties:
    r"""EventExtendedProperties
    Extended properties of the event.
    """
    
    private: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    shared: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    

@dataclass_json
@dataclass
class EventGadget:
    r"""EventGadget
    A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
    """
    
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconLink') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    preferences: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class EventOrganizer:
    r"""EventOrganizer
    The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class EventReminders:
    r"""EventReminders
    Information about the event's reminders for the authenticated user.
    """
    
    overrides: Optional[List[EventReminder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefault') }})
    

@dataclass_json
@dataclass
class EventSource:
    r"""EventSource
    Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
    """
    
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Event:
    anyone_can_add_self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anyoneCanAddSelf') }})
    attachments: Optional[List[EventAttachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    attendees: Optional[List[EventAttendee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees') }})
    attendees_omitted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendeesOmitted') }})
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorId') }})
    conference_data: Optional[ConferenceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceData') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[EventCreator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end: Optional[EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    end_time_unspecified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeUnspecified') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    extended_properties: Optional[EventExtendedProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedProperties') }})
    gadget: Optional[EventGadget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gadget') }})
    guests_can_invite_others: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestsCanInviteOthers') }})
    guests_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestsCanModify') }})
    guests_can_see_other_guests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestsCanSeeOtherGuests') }})
    hangout_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutLink') }})
    html_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlLink') }})
    i_cal_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iCalUID') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    organizer: Optional[EventOrganizer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizer') }})
    original_start_time: Optional[EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalStartTime') }})
    private_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateCopy') }})
    recurrence: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    recurring_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringEventId') }})
    reminders: Optional[EventReminders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminders') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    source: Optional[EventSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    start: Optional[EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    transparency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transparency') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
