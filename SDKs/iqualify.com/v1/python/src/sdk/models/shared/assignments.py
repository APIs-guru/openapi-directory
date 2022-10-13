from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class Assignments:
    files: Optional[List[document.Document]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    marks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marks' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submitted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
