from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableRackReservationInput:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    rack: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    units: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    user: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
