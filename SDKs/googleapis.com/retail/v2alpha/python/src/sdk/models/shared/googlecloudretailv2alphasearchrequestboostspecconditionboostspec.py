from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec:
    boost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boost' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    
