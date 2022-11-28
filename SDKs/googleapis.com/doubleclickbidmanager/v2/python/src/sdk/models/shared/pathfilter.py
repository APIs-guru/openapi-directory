from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PathFilterPathMatchPositionEnum(str, Enum):
    PATH_MATCH_POSITION_UNSPECIFIED = "PATH_MATCH_POSITION_UNSPECIFIED"
    ANY = "ANY"
    FIRST = "FIRST"
    LAST = "LAST"


@dataclass_json
@dataclass
class PathFilter:
    r"""PathFilter
    Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
    """
    
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    path_match_position: Optional[PathFilterPathMatchPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathMatchPosition') }})
    
