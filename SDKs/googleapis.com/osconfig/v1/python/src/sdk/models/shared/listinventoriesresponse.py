from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInventoriesResponse:
    r"""ListInventoriesResponse
    A response message for listing inventory data for all VMs in a specified location.
    """
    
    inventories: Optional[List[Inventory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
