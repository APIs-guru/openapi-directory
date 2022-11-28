from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GkeNodePoolTargetRolesEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    CONTROLLER = "CONTROLLER"
    SPARK_DRIVER = "SPARK_DRIVER"
    SPARK_EXECUTOR = "SPARK_EXECUTOR"


@dataclass_json
@dataclass
class GkeNodePoolTarget:
    r"""GkeNodePoolTarget
    GKE node pools that Dataproc workloads run on.
    """
    
    node_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePool') }})
    node_pool_config: Optional[GkeNodePoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolConfig') }})
    roles: Optional[List[GkeNodePoolTargetRolesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
