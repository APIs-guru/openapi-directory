from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkperformanceconfig


@dataclass_json
@dataclass
class NodeNetworkConfig:
    create_pod_range: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPodRange' }})
    network_performance_config: Optional[networkperformanceconfig.NetworkPerformanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkPerformanceConfig' }})
    pod_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podIpv4CidrBlock' }})
    pod_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podRange' }})
    
