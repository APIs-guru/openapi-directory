from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CitiesRow:
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    first_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    parameters: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
