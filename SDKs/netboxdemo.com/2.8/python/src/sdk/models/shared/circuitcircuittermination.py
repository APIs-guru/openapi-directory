from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CircuitCircuitTermination:
    connected_endpoint: NestedInterface = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint') }})
    port_speed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    site: NestedSite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    
