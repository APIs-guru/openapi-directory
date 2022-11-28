from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FeatureStateCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    OK = "OK"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class FeatureState:
    r"""FeatureState
    FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
    """
    
    code: Optional[FeatureStateCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
