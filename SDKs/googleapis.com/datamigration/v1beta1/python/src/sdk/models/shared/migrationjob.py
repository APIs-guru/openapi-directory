from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import databasetype
from . import status
from . import reversesshconnectivity
from . import databasetype
from . import vpcpeeringconnectivity

class MigrationJobPhaseEnum(str, Enum):
    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED"
    FULL_DUMP = "FULL_DUMP"
    CDC = "CDC"
    PROMOTE_IN_PROGRESS = "PROMOTE_IN_PROGRESS"
    WAITING_FOR_SOURCE_WRITES_TO_STOP = "WAITING_FOR_SOURCE_WRITES_TO_STOP"
    PREPARING_THE_DUMP = "PREPARING_THE_DUMP"

class MigrationJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    MAINTENANCE = "MAINTENANCE"
    DRAFT = "DRAFT"
    CREATING = "CREATING"
    NOT_STARTED = "NOT_STARTED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    DELETING = "DELETING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETED = "DELETED"
    UPDATING = "UPDATING"
    STARTING = "STARTING"
    RESTARTING = "RESTARTING"
    RESUMING = "RESUMING"

class MigrationJobTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ONE_TIME = "ONE_TIME"
    CONTINUOUS = "CONTINUOUS"


@dataclass_json
@dataclass
class MigrationJob:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_database: Optional[databasetype.DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDatabase' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dump_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dumpPath' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phase: Optional[MigrationJobPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    reverse_ssh_connectivity: Optional[reversesshconnectivity.ReverseSSHConnectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseSshConnectivity' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_database: Optional[databasetype.DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDatabase' }})
    state: Optional[MigrationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    static_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIpConnectivity' }})
    type: Optional[MigrationJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vpc_peering_connectivity: Optional[vpcpeeringconnectivity.VpcPeeringConnectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcPeeringConnectivity' }})
    
