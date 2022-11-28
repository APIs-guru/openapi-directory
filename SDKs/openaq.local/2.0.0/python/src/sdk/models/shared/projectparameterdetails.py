from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectParameterDetails:
    average: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastValue') }})
    locations: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    parameter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    parameter_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterId') }})
    unit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
