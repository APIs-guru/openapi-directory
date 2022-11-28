from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarketingEventEmailSubscriber:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    interaction_date_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionDateTime') }})
    contact_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactProperties') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
