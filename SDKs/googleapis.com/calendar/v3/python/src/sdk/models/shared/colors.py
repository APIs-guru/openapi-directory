from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import colordefinition
from . import colordefinition


@dataclass_json
@dataclass
class Colors:
    calendar: Optional[dict[str, colordefinition.ColorDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendar' }})
    event: Optional[dict[str, colordefinition.ColorDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
