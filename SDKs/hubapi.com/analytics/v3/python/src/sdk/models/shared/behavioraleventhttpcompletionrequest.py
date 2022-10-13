from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BehavioralEventHTTPCompletionRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    event_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    occurred_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    properties: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    utk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utk' }})
    
