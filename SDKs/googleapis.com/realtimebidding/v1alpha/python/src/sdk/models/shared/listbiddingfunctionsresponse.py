from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import biddingfunction


@dataclass_json
@dataclass
class ListBiddingFunctionsResponse:
    bidding_functions: Optional[List[biddingfunction.BiddingFunction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biddingFunctions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
