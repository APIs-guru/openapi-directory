from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    AUTO = "AUTO"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec:
    mode: Optional[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
