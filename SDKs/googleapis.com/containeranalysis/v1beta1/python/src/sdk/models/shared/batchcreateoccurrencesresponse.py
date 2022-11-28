from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateOccurrencesResponse:
    r"""BatchCreateOccurrencesResponse
    Response for creating occurrences in batch.
    """
    
    occurrences: Optional[List[Occurrence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    
