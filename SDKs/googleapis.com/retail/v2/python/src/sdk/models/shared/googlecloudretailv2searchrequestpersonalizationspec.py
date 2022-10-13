from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    AUTO = "AUTO"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestPersonalizationSpec:
    mode: Optional[GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
