from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComponentRepresentation:
    config: Optional[MultivaluedHashMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    provider_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerType') }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    
