from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endofsegmentlocation
from . import location


@dataclass_json
@dataclass
class InsertTableRequest:
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    end_of_segment_location: Optional[endofsegmentlocation.EndOfSegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOfSegmentLocation' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
