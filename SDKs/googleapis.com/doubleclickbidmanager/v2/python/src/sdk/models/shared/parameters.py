from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filterpair
from . import options

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
    filters: Optional[List[filterpair.FilterPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    group_bys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupBys' }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    type: Optional[ParametersTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
