from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BillAction:
    classification: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    date_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    order: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    organization: Organization = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    
