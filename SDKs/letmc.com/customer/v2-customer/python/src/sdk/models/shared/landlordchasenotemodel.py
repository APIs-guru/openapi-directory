from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordChaseNoteModel:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    note_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoteType' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenantID' }})
    
