from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordMaintenancePreferenceModel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
