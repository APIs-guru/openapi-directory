from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Presence:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[Item] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_id') }})
    item_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_url') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_url') }})
    proximity: Optional[ProximityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximity') }})
    technology: Optional[TechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technology') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_updated') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
