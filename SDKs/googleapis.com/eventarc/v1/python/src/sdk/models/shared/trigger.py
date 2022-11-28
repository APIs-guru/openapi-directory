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
class Trigger:
    r"""Trigger
    A representation of the trigger resource.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    conditions: Optional[dict[str, StateCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destination: Optional[Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    transport: Optional[Transport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class TriggerInput:
    r"""TriggerInput
    A representation of the trigger resource.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    destination: Optional[Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    transport: Optional[TransportInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    
