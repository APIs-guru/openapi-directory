from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CloudRunConfigLoadBalancerTypeEnum(str, Enum):
    LOAD_BALANCER_TYPE_UNSPECIFIED = "LOAD_BALANCER_TYPE_UNSPECIFIED"
    LOAD_BALANCER_TYPE_EXTERNAL = "LOAD_BALANCER_TYPE_EXTERNAL"
    LOAD_BALANCER_TYPE_INTERNAL = "LOAD_BALANCER_TYPE_INTERNAL"


@dataclass_json
@dataclass
class CloudRunConfig:
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    load_balancer_type: Optional[CloudRunConfigLoadBalancerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerType' }})
    
