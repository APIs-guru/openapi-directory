from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectParameterDetails:
    average: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    first_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastValue' }})
    locations: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    parameter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parameter_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterId' }})
    unit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
