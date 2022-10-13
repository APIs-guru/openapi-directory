from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class KeyFormFactorEnum(str, Enum):
    ALL_FORM_FACTORS = "ALL_FORM_FACTORS"
    PHONE = "PHONE"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"


@dataclass_json
@dataclass
class Key:
    effective_connection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveConnectionType' }})
    form_factor: Optional[KeyFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
