from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DynamicTargetingKeyObjectTypeEnum(str, Enum):
    OBJECT_ADVERTISER = "OBJECT_ADVERTISER"
    OBJECT_AD = "OBJECT_AD"
    OBJECT_CREATIVE = "OBJECT_CREATIVE"
    OBJECT_PLACEMENT = "OBJECT_PLACEMENT"


@dataclass_json
@dataclass
class DynamicTargetingKey:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    object_type: Optional[DynamicTargetingKeyObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    
