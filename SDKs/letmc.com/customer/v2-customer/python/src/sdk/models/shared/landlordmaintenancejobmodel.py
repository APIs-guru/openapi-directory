from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordMaintenanceJobModel:
    r"""LandlordMaintenanceJobModel
    Maintenance Job
    """
    
    assigned_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignedTo') }})
    closed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClosedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    maintenance_notes: Optional[List[LandlordMaintenanceJobNoteModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceNotes') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Property') }})
    reported: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reported'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
