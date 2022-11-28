from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""UniversalAdID
    A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    registry: Optional[UniversalAdIDRegistryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    
