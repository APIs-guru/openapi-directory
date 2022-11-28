from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadDataParty3:
    party: Optional[List[ObParty2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Party') }})
    
