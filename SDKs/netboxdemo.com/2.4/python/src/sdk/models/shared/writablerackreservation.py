from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableRackReservation:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    rack: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    units: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    user: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
