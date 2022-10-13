from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CountriesRow:
    cities: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cities' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    first_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    sources: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
