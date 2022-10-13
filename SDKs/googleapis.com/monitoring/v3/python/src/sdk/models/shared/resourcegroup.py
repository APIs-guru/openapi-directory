from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ResourceGroupResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    INSTANCE = "INSTANCE"
    AWS_ELB_LOAD_BALANCER = "AWS_ELB_LOAD_BALANCER"


@dataclass_json
@dataclass
class ResourceGroup:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    resource_type: Optional[ResourceGroupResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
