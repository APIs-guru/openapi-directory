from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordMaintenanceJobNoteModel:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoteContents' }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OID' }})
    
