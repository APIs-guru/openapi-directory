from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import demotemastermysqlreplicaconfiguration


@dataclass_json
@dataclass
class DemoteMasterConfiguration:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mysql_replica_configuration: Optional[demotemastermysqlreplicaconfiguration.DemoteMasterMySQLReplicaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlReplicaConfiguration' }})
    
