from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    AUTO = "AUTO"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec:
    mode: Optional[GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
