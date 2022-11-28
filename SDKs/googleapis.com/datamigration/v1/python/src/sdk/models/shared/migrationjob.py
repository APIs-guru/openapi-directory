from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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

class MigrationJobPhaseEnum(str, Enum):
    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED"
    FULL_DUMP = "FULL_DUMP"
    CDC = "CDC"
    PROMOTE_IN_PROGRESS = "PROMOTE_IN_PROGRESS"
    WAITING_FOR_SOURCE_WRITES_TO_STOP = "WAITING_FOR_SOURCE_WRITES_TO_STOP"
    PREPARING_THE_DUMP = "PREPARING_THE_DUMP"


@dataclass_json
@dataclass
class MigrationJobInput:
    r"""MigrationJobInput
    Represents a Database Migration Service migration job object.
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_database: Optional[DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatabase') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dump_flags: Optional[DumpFlags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpFlags') }})
    dump_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpPath') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reverse_ssh_connectivity: Optional[ReverseSSHConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseSshConnectivity') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_database: Optional[DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    state: Optional[MigrationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    static_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIpConnectivity') }})
    type: Optional[MigrationJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vpc_peering_connectivity: Optional[VpcPeeringConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConnectivity') }})
    

@dataclass_json
@dataclass
class MigrationJob:
    r"""MigrationJob
    Represents a Database Migration Service migration job object.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_database: Optional[DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatabase') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dump_flags: Optional[DumpFlags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpFlags') }})
    dump_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpPath') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phase: Optional[MigrationJobPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    reverse_ssh_connectivity: Optional[ReverseSSHConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseSshConnectivity') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_database: Optional[DatabaseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    state: Optional[MigrationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    static_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIpConnectivity') }})
    type: Optional[MigrationJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vpc_peering_connectivity: Optional[VpcPeeringConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConnectivity') }})
    
