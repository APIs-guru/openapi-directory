from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBuildsResponse:
    r"""ListBuildsResponse
    Response including listed builds.
    """
    
    builds: Optional[List[Build]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builds') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
