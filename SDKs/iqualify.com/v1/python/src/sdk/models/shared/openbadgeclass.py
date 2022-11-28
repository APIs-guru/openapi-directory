from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpenBadgeClassCriteria:
    narrative: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('narrative') }})
    

@dataclass_json
@dataclass
class OpenBadgeClass:
    criteria: Optional[OpenBadgeClassCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
