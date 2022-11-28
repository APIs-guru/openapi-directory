from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceGroupResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    INSTANCE = "INSTANCE"
    AWS_ELB_LOAD_BALANCER = "AWS_ELB_LOAD_BALANCER"


@dataclass_json
@dataclass
class ResourceGroup:
    r"""ResourceGroup
    The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    resource_type: Optional[ResourceGroupResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
