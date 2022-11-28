from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBiddersResponse:
    r"""ListBiddersResponse
    A response containing bidders.
    """
    
    bidders: Optional[List[Bidder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidders') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
