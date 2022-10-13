from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transittabletransittimerowtransittimevalue


@dataclass_json
@dataclass
class TransitTableTransitTimeRow:
    values: Optional[List[transittabletransittimerowtransittimevalue.TransitTableTransitTimeRowTransitTimeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
