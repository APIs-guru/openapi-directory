from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conferenceproperties
from . import eventreminder
from . import calendarnotification


@dataclass_json
@dataclass
class CalendarListEntryNotificationSettings:
    notifications: Optional[List[calendarnotification.CalendarNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    

@dataclass_json
@dataclass
class CalendarListEntry:
    access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessRole' }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorId' }})
    conference_properties: Optional[conferenceproperties.ConferenceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceProperties' }})
    default_reminders: Optional[List[eventreminder.EventReminder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultReminders' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    foreground_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColor' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    notification_settings: Optional[CalendarListEntryNotificationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationSettings' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    summary_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryOverride' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
