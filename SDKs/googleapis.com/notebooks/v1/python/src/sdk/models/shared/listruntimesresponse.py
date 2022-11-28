from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRuntimesResponse:
    r"""ListRuntimesResponse
    Response for listing Managed Notebook Runtimes.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtimes: Optional[List[Runtime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimes') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
