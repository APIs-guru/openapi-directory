from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarketingEventSubscriber:
    interaction_date_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionDateTime') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    vid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vid') }})
    
