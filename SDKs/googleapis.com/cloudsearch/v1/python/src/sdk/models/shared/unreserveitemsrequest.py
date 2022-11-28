from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnreserveItemsRequest:
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    debug_options: Optional[DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugOptions') }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue') }})
    
