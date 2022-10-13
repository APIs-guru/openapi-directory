from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SasPortalNrqzValidationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class SasPortalNrqzValidation:
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    cpi_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpiId' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    state: Optional[SasPortalNrqzValidationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
