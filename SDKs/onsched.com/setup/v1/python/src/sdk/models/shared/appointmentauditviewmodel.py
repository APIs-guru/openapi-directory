from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppointmentAuditViewModel:
    appointment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointmentId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modificationType' }})
    modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedBy' }})
    modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notesAfter' }})
    notes_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notesBefore' }})
    status_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusAfter' }})
    status_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusBefore' }})
    
