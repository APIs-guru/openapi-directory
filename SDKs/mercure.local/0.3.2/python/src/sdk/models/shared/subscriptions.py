from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subscriptions:
    at_context: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('@context') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEventID') }})
    subscriptions: List[Subscription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
