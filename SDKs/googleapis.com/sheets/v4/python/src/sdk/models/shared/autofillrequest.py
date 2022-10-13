from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridrange
from . import sourceanddestination


@dataclass_json
@dataclass
class AutoFillRequest:
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    source_and_destination: Optional[sourceanddestination.SourceAndDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAndDestination' }})
    use_alternate_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAlternateSeries' }})
    
