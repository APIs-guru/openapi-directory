from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataNotification:
    entries: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    key_material: KeyMaterial = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyMaterial') }})
    page_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    page_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
