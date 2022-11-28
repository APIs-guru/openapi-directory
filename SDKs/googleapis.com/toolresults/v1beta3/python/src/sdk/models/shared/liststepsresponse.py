from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStepsResponse:
    r"""ListStepsResponse
    Response message for StepService.List.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    steps: Optional[List[Step]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
