from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CitiesRow:
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    parameters: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    
