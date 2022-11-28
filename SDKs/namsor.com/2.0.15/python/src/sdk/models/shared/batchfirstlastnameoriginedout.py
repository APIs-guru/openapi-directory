from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchFirstLastNameOriginedOut:
    r"""BatchFirstLastNameOriginedOut
    Represents the output of inferring the LIKELY origin from a list of personal names.
    """
    
    personal_names: Optional[List[FirstLastNameOriginedOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
