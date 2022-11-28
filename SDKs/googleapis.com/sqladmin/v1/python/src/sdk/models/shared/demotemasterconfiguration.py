from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DemoteMasterConfiguration:
    r"""DemoteMasterConfiguration
    Read-replica configuration for connecting to the on-premises primary instance.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mysql_replica_configuration: Optional[DemoteMasterMySQLReplicaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlReplicaConfiguration') }})
    
