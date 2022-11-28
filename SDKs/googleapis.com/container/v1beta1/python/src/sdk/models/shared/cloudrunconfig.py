from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CloudRunConfigLoadBalancerTypeEnum(str, Enum):
    LOAD_BALANCER_TYPE_UNSPECIFIED = "LOAD_BALANCER_TYPE_UNSPECIFIED"
    LOAD_BALANCER_TYPE_EXTERNAL = "LOAD_BALANCER_TYPE_EXTERNAL"
    LOAD_BALANCER_TYPE_INTERNAL = "LOAD_BALANCER_TYPE_INTERNAL"


@dataclass_json
@dataclass
class CloudRunConfig:
    r"""CloudRunConfig
    Configuration options for the Cloud Run feature.
    """
    
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    load_balancer_type: Optional[CloudRunConfigLoadBalancerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerType') }})
    
