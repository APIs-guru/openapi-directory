from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateOccurrencesRequestInput:
    r"""BatchCreateOccurrencesRequestInput
    Request to create occurrences in batch.
    """
    
    occurrences: Optional[List[OccurrenceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    
