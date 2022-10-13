from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transittabletransittimerow


@dataclass_json
@dataclass
class TransitTable:
    postal_code_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeGroupNames' }})
    rows: Optional[List[transittabletransittimerow.TransitTableTransitTimeRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    transit_time_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitTimeLabels' }})
    
