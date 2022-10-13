from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum(str, Enum):
    CONDITION_UNSPECIFIED = "CONDITION_UNSPECIFIED"
    DISABLED = "DISABLED"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestQueryExpansionSpec:
    condition: Optional[GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    pin_unexpanded_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinUnexpandedResults' }})
    
