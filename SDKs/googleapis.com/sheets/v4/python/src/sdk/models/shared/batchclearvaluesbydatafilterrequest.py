from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafilter


@dataclass_json
@dataclass
class BatchClearValuesByDataFilterRequest:
    data_filters: Optional[List[datafilter.DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilters' }})
    
