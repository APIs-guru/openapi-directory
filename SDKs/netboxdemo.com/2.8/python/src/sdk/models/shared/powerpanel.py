from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PowerPanel:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: NestedSite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    powerfeed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerfeed_count') }})
    rack_group: Optional[NestedRackGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack_group') }})
    
