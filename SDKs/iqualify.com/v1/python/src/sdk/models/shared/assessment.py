from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Assessment:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mark_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markNumber' }})
    mark_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markType' }})
    open_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
