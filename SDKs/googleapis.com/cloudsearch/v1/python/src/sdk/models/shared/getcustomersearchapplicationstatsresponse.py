from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customersearchapplicationstats


@dataclass_json
@dataclass
class GetCustomerSearchApplicationStatsResponse:
    average_search_application_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageSearchApplicationCount' }})
    stats: Optional[List[customersearchapplicationstats.CustomerSearchApplicationStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
