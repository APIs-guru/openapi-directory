from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBiddingFunctionsResponse:
    r"""ListBiddingFunctionsResponse
    A response containing a list of a bidder's bidding functions.
    """
    
    bidding_functions: Optional[List[BiddingFunction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingFunctions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
