from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UniversalAdIDRegistryEnum(str, Enum):
    OTHER = "OTHER"
    AD_ID_ORG = "AD_ID.ORG"
    CLEARCAST = "CLEARCAST"
    DCM = "DCM"


@dataclass_json
@dataclass
class UniversalAdID:
    registry: Optional[UniversalAdIDRegistryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
