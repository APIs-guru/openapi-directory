from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicListener:
    r"""DynamicListener
    Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
    """
    
    active_state: Optional[DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeState') }})
    draining_state: Optional[DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drainingState') }})
    error_state: Optional[UpdateFailureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    warming_state: Optional[DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warmingState') }})
    
