from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventfilter

class PathFilterPathMatchPositionEnum(str, Enum):
    PATH_MATCH_POSITION_UNSPECIFIED = "PATH_MATCH_POSITION_UNSPECIFIED"
    ANY = "ANY"
    FIRST = "FIRST"
    LAST = "LAST"


@dataclass_json
@dataclass
class PathFilter:
    event_filters: Optional[List[eventfilter.EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFilters' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    path_match_position: Optional[PathFilterPathMatchPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathMatchPosition' }})
    
