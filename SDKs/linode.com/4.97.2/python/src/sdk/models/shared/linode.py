from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinodeBackupsInput:
    r"""LinodeBackupsInput
    Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
    
    """
    
    schedule: Optional[LinodeBackupsSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass_json
@dataclass
class LinodeAlerts:
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    io: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('io') }})
    network_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_in') }})
    network_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_out') }})
    transfer_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_quota') }})
    
class LinodeBackupsScheduleDayEnum(str, Enum):
    SCHEDULING = "Scheduling"
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"

class LinodeBackupsScheduleWindowEnum(str, Enum):
    SCHEDULING = "Scheduling"
    W0 = "W0"
    W2 = "W2"
    W4 = "W4"
    W6 = "W6"
    W8 = "W8"
    W10 = "W10"
    W12 = "W12"
    W14 = "W14"
    W16 = "W16"
    W18 = "W18"
    W20 = "W20"
    W22 = "W22"


@dataclass_json
@dataclass
class LinodeBackupsSchedule:
    day: Optional[LinodeBackupsScheduleDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    window: Optional[LinodeBackupsScheduleWindowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    

@dataclass_json
@dataclass
class LinodeBackups:
    r"""LinodeBackups
    Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
    
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    last_successful: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_successful'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule: Optional[LinodeBackupsSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
class LinodeHypervisorEnum(str, Enum):
    KVM = "kvm"


@dataclass_json
@dataclass
class LinodeSpecs:
    r"""LinodeSpecs
    Information about the resources available to this Linode.
    """
    
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
class LinodeStatusEnum(str, Enum):
    RUNNING = "running"
    OFFLINE = "offline"
    BOOTING = "booting"
    REBOOTING = "rebooting"
    SHUTTING_DOWN = "shutting_down"
    PROVISIONING = "provisioning"
    DELETING = "deleting"
    MIGRATING = "migrating"
    REBUILDING = "rebuilding"
    CLONING = "cloning"
    RESTORING = "restoring"
    STOPPED = "stopped"


@dataclass_json
@dataclass
class LinodeInput:
    alerts: Optional[LinodeAlerts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    backups: Optional[LinodeBackupsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    watchdog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchdog_enabled') }})
    

@dataclass_json
@dataclass
class Linode:
    alerts: Optional[LinodeAlerts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    backups: Optional[LinodeBackups] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    hypervisor: Optional[LinodeHypervisorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hypervisor') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    ipv4: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    specs: Optional[LinodeSpecs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specs') }})
    status: Optional[LinodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    watchdog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchdog_enabled') }})
    
