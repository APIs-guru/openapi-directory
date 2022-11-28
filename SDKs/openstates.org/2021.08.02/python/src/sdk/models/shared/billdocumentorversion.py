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
class BillDocumentOrVersion:
    date_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    links: List[BillDocumentLink] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    note: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
