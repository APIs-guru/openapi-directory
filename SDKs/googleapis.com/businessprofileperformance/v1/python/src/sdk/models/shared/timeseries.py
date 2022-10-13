from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datedvalue


@dataclass_json
@dataclass
class TimeSeries:
    dated_values: Optional[List[datedvalue.DatedValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datedValues' }})
    
