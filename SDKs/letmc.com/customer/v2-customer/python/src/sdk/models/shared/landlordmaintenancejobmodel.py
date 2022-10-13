from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordmaintenancejobnotemodel


@dataclass_json
@dataclass
class LandlordMaintenanceJobModel:
    assigned_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignedTo' }})
    closed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClosedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    maintenance_notes: Optional[List[landlordmaintenancejobnotemodel.LandlordMaintenanceJobNoteModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceNotes' }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Property' }})
    reported: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reported', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
