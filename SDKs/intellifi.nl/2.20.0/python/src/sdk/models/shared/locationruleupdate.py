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
class LocationRuleUpdateConditions:
    r"""LocationRuleUpdateConditions
    Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
    """
    
    from_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_location') }})
    to_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_location') }})
    

@dataclass_json
@dataclass
class LocationRuleUpdate:
    conditions: Optional[LocationRuleUpdateConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    type: Optional[LocationRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
