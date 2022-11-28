from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CountriesRow:
    cities: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    sources: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
