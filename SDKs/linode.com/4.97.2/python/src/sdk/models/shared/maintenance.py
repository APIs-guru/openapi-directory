from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceEntity:
    r"""MaintenanceEntity
    The entity being affected by maintenance.
    
    """
    
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class MaintenanceStatusEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"

class MaintenanceTypeEnum(str, Enum):
    REBOOT = "reboot"
    COLD_MIGRATION = "cold_migration"
    LIVE_MIGRATION = "live_migration"


@dataclass_json
@dataclass
class Maintenance:
    r"""Maintenance
    Information about maintenance affecting an entity.
    
    """
    
    entity: Optional[MaintenanceEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[MaintenanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[MaintenanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('when'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
