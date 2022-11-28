from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBuyersResponse:
    r"""ListBuyersResponse
    A response containing buyer account information.
    """
    
    buyers: Optional[List[Buyer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
