from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMattersResponse:
    r"""ListMattersResponse
    Provides the list of matters.
    """
    
    matters: Optional[List[Matter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matters') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
