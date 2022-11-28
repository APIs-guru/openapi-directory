from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEnvironmentsResponse:
    r"""ListEnvironmentsResponse
    List Environments Response.
    """
    
    environment: Optional[List[Environment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
