from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventattachment
from . import eventattendee
from . import conferencedata
from . import eventdatetime
from . import eventdatetime
from . import eventreminder
from . import eventdatetime


@dataclass_json
@dataclass
class EventCreator:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class EventExtendedProperties:
    private: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    shared: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    

@dataclass_json
@dataclass
class EventGadget:
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconLink' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    preferences: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class EventOrganizer:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class EventReminders:
    overrides: Optional[List[eventreminder.EventReminder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefault' }})
    

@dataclass_json
@dataclass
class EventSource:
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Event:
    anyone_can_add_self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anyoneCanAddSelf' }})
    attachments: Optional[List[eventattachment.EventAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    attendees: Optional[List[eventattendee.EventAttendee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attendees' }})
    attendees_omitted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attendeesOmitted' }})
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorId' }})
    conference_data: Optional[conferencedata.ConferenceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceData' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[EventCreator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end: Optional[eventdatetime.EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    end_time_unspecified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeUnspecified' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    extended_properties: Optional[EventExtendedProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedProperties' }})
    gadget: Optional[EventGadget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gadget' }})
    guests_can_invite_others: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestsCanInviteOthers' }})
    guests_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestsCanModify' }})
    guests_can_see_other_guests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestsCanSeeOtherGuests' }})
    hangout_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangoutLink' }})
    html_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlLink' }})
    i_cal_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iCalUID' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    organizer: Optional[EventOrganizer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizer' }})
    original_start_time: Optional[eventdatetime.EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalStartTime' }})
    private_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateCopy' }})
    recurrence: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurrence' }})
    recurring_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringEventId' }})
    reminders: Optional[EventReminders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminders' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    source: Optional[EventSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    start: Optional[eventdatetime.EventDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    transparency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transparency' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
