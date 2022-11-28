from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegistrationsNumber:
    registries_activity: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registries_activity') }})
    registration_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_no') }})
    
