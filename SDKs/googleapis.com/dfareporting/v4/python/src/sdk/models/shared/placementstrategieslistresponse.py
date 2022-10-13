from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placementstrategy


@dataclass_json
@dataclass
class PlacementStrategiesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    placement_strategies: Optional[List[placementstrategy.PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategies' }})
    
