from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlreplicaconfiguration


@dataclass_json
@dataclass
class ReplicaConfiguration:
    failover_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverTarget' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mysql_replica_configuration: Optional[mysqlreplicaconfiguration.MySQLReplicaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlReplicaConfiguration' }})
    
