from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafilter
from . import valuerange


@dataclass_json
@dataclass
class MatchedValueRange:
    data_filters: Optional[List[datafilter.DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilters' }})
    value_range: Optional[valuerange.ValueRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueRange' }})
    
