from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BrowsersListResponse:
    r"""BrowsersListResponse
    Browser List Response
    """
    
    browsers: Optional[List[Browser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsers') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
