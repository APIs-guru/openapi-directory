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
    Represents a DfaReporting path filter.
    """
    
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    path_match_position: Optional[PathFilterPathMatchPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathMatchPosition') }})
    
