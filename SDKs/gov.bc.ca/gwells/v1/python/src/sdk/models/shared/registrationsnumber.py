from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegistrationsNumber:
    registration_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_no' }})
    registries_activity: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registries_activity' }})
    
