from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bandingproperties
from . import gridrange
from . import bandingproperties


@dataclass_json
@dataclass
class BandedRange:
    banded_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandedRangeId' }})
    column_properties: Optional[bandingproperties.BandingProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnProperties' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    row_properties: Optional[bandingproperties.BandingProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowProperties' }})
    
