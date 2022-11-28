from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeBalancerNodeModeEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"
    DRAIN = "drain"
    BACKUP = "backup"

class NodeBalancerNodeStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class NodeBalancerNodeInput:
    r"""NodeBalancerNodeInput
    A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
    
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    mode: Optional[NodeBalancerNodeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    

@dataclass_json
@dataclass
class NodeBalancerNode:
    r"""NodeBalancerNode
    A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
    
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    mode: Optional[NodeBalancerNodeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancer_id') }})
    status: Optional[NodeBalancerNodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
