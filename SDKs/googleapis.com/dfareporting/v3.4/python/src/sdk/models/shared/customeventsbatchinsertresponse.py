from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomEventsBatchInsertResponse:
    r"""CustomEventsBatchInsertResponse
    Insert Custom Events Response.
    """
    
    has_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFailures') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    status: Optional[List[CustomEventStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
