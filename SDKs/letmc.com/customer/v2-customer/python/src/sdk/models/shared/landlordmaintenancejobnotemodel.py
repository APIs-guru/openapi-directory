from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LandlordMaintenanceJobNoteModel:
    r"""LandlordMaintenanceJobNoteModel
    Maintenance Job Note Helper Model:-
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteContents') }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OID') }})
    
