from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Location:
    teams: List[dict[str, str]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    tenant: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
