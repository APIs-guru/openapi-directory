from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StopBackfillJobResponse:
    r"""StopBackfillJobResponse
    Response for manually stop a backfill job for a specific stream object.
    """
    
    object: Optional[StreamObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
