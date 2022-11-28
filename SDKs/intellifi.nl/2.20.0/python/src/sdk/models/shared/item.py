from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemInput:
    code_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_hex') }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_request') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    location_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_request') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    protocol: Optional[ItemProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    technology: Optional[TechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technology') }})
    type: Optional[ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Item:
    code_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_hex') }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_request') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    geo_coords: Optional[GeoCoordsReadOnly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo_coords') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_present') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    location_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_request') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    move_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move_count') }})
    protocol: Optional[ItemProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sets') }})
    technology: Optional[TechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technology') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_last_present: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_last_present') }})
    time_moved: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_moved') }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_updated') }})
    type: Optional[ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
