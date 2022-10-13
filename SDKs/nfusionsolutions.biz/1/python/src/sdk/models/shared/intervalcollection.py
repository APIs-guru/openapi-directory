from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import interval


@dataclass_json
@dataclass
class IntervalCollection:
    base_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCurrency' }})
    intervals: Optional[List[interval.Interval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervals' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    
