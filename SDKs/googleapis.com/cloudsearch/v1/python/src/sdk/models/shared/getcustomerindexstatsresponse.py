from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCustomerIndexStatsResponse:
    average_indexed_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageIndexedItemCount') }})
    stats: Optional[List[CustomerIndexStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
