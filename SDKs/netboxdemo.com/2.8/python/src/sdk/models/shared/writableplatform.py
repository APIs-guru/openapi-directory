from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritablePlatformInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    manufacturer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    napalm_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_args') }})
    napalm_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_driver') }})
    
