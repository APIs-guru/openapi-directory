from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import custombiddingalgorithm


@dataclass_json
@dataclass
class ListCustomBiddingAlgorithmsResponse:
    custom_bidding_algorithms: Optional[List[custombiddingalgorithm.CustomBiddingAlgorithm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customBiddingAlgorithms' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
