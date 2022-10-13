from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UniversalAdIDRegistryEnum(str, Enum):
    UNIVERSAL_AD_REGISTRY_UNSPECIFIED = "UNIVERSAL_AD_REGISTRY_UNSPECIFIED"
    UNIVERSAL_AD_REGISTRY_OTHER = "UNIVERSAL_AD_REGISTRY_OTHER"
    UNIVERSAL_AD_REGISTRY_AD_ID = "UNIVERSAL_AD_REGISTRY_AD_ID"
    UNIVERSAL_AD_REGISTRY_CLEARCAST = "UNIVERSAL_AD_REGISTRY_CLEARCAST"
    UNIVERSAL_AD_REGISTRY_DV360 = "UNIVERSAL_AD_REGISTRY_DV360"
    UNIVERSAL_AD_REGISTRY_CM = "UNIVERSAL_AD_REGISTRY_CM"


@dataclass_json
@dataclass
class UniversalAdID:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    registry: Optional[UniversalAdIDRegistryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    
