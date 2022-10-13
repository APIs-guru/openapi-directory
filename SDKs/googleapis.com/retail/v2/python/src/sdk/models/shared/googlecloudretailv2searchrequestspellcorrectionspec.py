from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    SUGGESTION_ONLY = "SUGGESTION_ONLY"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestSpellCorrectionSpec:
    mode: Optional[GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
