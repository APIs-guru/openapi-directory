from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customeruserstats


@dataclass_json
@dataclass
class GetCustomerUserStatsResponse:
    stats: Optional[List[customeruserstats.CustomerUserStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
