from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import demotemasterconfiguration


@dataclass_json
@dataclass
class DemoteMasterContext:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    master_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterInstanceName' }})
    replica_configuration: Optional[demotemasterconfiguration.DemoteMasterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicaConfiguration' }})
    skip_replication_setup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipReplicationSetup' }})
    verify_gtid_consistency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyGtidConsistency' }})
    
