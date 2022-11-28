from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchFirstLastNameGenderedOut:
    r"""BatchFirstLastNameGenderedOut
    Represents the output of inferring the LIKELY gender from a list of personal names.
    """
    
    personal_names: Optional[List[FirstLastNameGenderedOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
