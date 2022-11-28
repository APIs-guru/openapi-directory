from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCustomerSearchApplicationStatsResponse:
    r"""GetCustomerSearchApplicationStatsResponse
    Response format for search application stats for a customer.
    """
    
    average_search_application_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageSearchApplicationCount') }})
    stats: Optional[List[CustomerSearchApplicationStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
