from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceOptionsUpdateModel:
    consumer_padding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerPadding') }})
    default_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultService') }})
    duration_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInterval') }})
    duration_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMax') }})
    duration_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMin') }})
    duration_select: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSelect') }})
    padding: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padding') }})
    
