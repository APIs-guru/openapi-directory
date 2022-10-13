from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Status:
    attrs: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attrs' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    severity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
