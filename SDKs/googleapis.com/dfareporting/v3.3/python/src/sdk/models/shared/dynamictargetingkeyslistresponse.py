from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamictargetingkey


@dataclass_json
@dataclass
class DynamicTargetingKeysListResponse:
    dynamic_targeting_keys: Optional[List[dynamictargetingkey.DynamicTargetingKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicTargetingKeys' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
