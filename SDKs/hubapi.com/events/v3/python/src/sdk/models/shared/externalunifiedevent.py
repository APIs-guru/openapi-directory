from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternalUnifiedEvent:
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    object_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    object_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    occurred_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    properties: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
