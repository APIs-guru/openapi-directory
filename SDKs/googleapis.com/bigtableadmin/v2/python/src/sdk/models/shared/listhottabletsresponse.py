from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHotTabletsResponse:
    r"""ListHotTabletsResponse
    Response message for BigtableInstanceAdmin.ListHotTablets.
    """
    
    hot_tablets: Optional[List[HotTablet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotTablets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
