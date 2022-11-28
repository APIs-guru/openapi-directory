from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VirtualMachineWithConfigContextStatusLabelEnum(str, Enum):
    OFFLINE = "Offline"
    ACTIVE = "Active"
    PLANNED = "Planned"
    STAGED = "Staged"
    FAILED = "Failed"
    DECOMMISSIONING = "Decommissioning"

class VirtualMachineWithConfigContextStatusValueEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class VirtualMachineWithConfigContextStatus:
    label: VirtualMachineWithConfigContextStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: VirtualMachineWithConfigContextStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class VirtualMachineWithConfigContext:
    cluster: NestedCluster = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    config_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_context') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_context_data') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    platform: Optional[NestedPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    primary_ip: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip') }})
    primary_ip4: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip4') }})
    primary_ip6: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip6') }})
    role: Optional[NestedDeviceRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    site: Optional[NestedSite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[VirtualMachineWithConfigContextStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
