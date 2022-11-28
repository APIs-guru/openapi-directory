from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationRuleConditions11:
    from_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_location') }})
    

@dataclass_json
@dataclass
class LocationRuleConditions12:
    from_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_location_id') }})
    

@dataclass_json
@dataclass
class LocationRuleConditions13:
    from_location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_location_url') }})
    

@dataclass_json
@dataclass
class LocationRuleConditions21:
    to_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_location') }})
    

@dataclass_json
@dataclass
class LocationRuleConditions22:
    to_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_location_id') }})
    

@dataclass_json
@dataclass
class LocationRuleConditions23:
    to_location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_location_url') }})
    

@dataclass_json
@dataclass
class LocationRule:
    conditions: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_updated') }})
    type: Optional[LocationRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
