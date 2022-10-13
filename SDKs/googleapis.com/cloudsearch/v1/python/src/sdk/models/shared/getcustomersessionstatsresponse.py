from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customersessionstats


@dataclass_json
@dataclass
class GetCustomerSessionStatsResponse:
    stats: Optional[List[customersessionstats.CustomerSessionStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
