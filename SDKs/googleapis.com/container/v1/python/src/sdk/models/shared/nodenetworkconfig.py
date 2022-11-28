from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeNetworkConfig:
    r"""NodeNetworkConfig
    Parameters for node pool-level network config.
    """
    
    create_pod_range: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPodRange') }})
    enable_private_nodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateNodes') }})
    network_performance_config: Optional[NetworkPerformanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkPerformanceConfig') }})
    pod_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podIpv4CidrBlock') }})
    pod_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podRange') }})
    
