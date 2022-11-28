from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BillSponsorship:
    classification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    entity_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    organization: Optional[Organization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    person: Optional[CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
