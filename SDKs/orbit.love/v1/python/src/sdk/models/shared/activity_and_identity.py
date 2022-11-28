from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityAndIdentity:
    activity: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    identity: Optional[Identity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    
