from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CalendarListEntryNotificationSettings:
    r"""CalendarListEntryNotificationSettings
    The notifications that the authenticated user is receiving for this calendar.
    """
    
    notifications: Optional[List[CalendarNotification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    

@dataclass_json
@dataclass
class CalendarListEntry:
    access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessRole') }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorId') }})
    conference_properties: Optional[ConferenceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceProperties') }})
    default_reminders: Optional[List[EventReminder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultReminders') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    foreground_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    notification_settings: Optional[CalendarListEntryNotificationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSettings') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    summary_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaryOverride') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
