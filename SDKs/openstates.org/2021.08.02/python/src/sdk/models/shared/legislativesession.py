from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LegislativeSession:
    classification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    end_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    
