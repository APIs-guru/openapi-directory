from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataType:
    field: Optional[List[DataTypeField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
