from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadDataTransaction6:
    transaction: Optional[List[ObTransaction6]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transaction') }})
    
