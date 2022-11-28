from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CircuitStatusLabelEnum(str, Enum):
    PLANNED = "Planned"
    PROVISIONING = "Provisioning"
    ACTIVE = "Active"
    OFFLINE = "Offline"
    DEPROVISIONING = "Deprovisioning"
    DECOMMISSIONED = "Decommissioned"

class CircuitStatusValueEnum(str, Enum):
    PLANNED = "planned"
    PROVISIONING = "provisioning"
    ACTIVE = "active"
    OFFLINE = "offline"
    DEPROVISIONING = "deprovisioning"
    DECOMMISSIONED = "decommissioned"


@dataclass_json
@dataclass
class CircuitStatus:
    label: CircuitStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: CircuitStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Circuit:
    cid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    provider: NestedProvider = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    type: NestedCircuitType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    commit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_rate') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    install_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('install_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[CircuitStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    termination_a: Optional[CircuitCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a') }})
    termination_z: Optional[CircuitCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_z') }})
    
