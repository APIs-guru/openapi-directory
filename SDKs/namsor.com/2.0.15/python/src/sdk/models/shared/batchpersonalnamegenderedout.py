from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPersonalNameGenderedOut:
    personal_names: Optional[List[PersonalNameGenderedOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
