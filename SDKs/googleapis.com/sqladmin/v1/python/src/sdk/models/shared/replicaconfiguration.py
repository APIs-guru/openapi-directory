from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaConfiguration:
    r"""ReplicaConfiguration
    Read-replica configuration for connecting to the primary instance.
    """
    
    failover_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverTarget') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mysql_replica_configuration: Optional[MySQLReplicaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlReplicaConfiguration') }})
    
