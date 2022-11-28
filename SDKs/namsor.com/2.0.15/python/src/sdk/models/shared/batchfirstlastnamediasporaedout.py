from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchFirstLastNameDiasporaedOut:
    r"""BatchFirstLastNameDiasporaedOut
    Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
    """
    
    personal_names: Optional[List[FirstLastNameDiasporaedOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
