from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gkenodepoolconfig

class GkeNodePoolTargetRolesEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    CONTROLLER = "CONTROLLER"
    SPARK_DRIVER = "SPARK_DRIVER"
    SPARK_EXECUTOR = "SPARK_EXECUTOR"


@dataclass_json
@dataclass
class GkeNodePoolTarget:
    node_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePool' }})
    node_pool_config: Optional[gkenodepoolconfig.GkeNodePoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolConfig' }})
    roles: Optional[List[GkeNodePoolTargetRolesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
