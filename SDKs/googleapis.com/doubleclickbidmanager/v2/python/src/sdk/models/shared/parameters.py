from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ParametersTypeEnum(str, Enum):
    REPORT_TYPE_UNSPECIFIED = "REPORT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INVENTORY_AVAILABILITY = "INVENTORY_AVAILABILITY"
    AUDIENCE_COMPOSITION = "AUDIENCE_COMPOSITION"
    FLOODLIGHT = "FLOODLIGHT"
    YOUTUBE = "YOUTUBE"
    GRP = "GRP"
    YOUTUBE_PROGRAMMATIC_GUARANTEED = "YOUTUBE_PROGRAMMATIC_GUARANTEED"
    REACH = "REACH"
    UNIQUE_REACH_AUDIENCE = "UNIQUE_REACH_AUDIENCE"
    FULL_PATH = "FULL_PATH"
    PATH_ATTRIBUTION = "PATH_ATTRIBUTION"


@dataclass_json
@dataclass
class Parameters:
    r"""Parameters
    Parameters of a query or report.
    """
    
    filters: Optional[List[FilterPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_bys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBys') }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    type: Optional[ParametersTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
