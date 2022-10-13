from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ElectoralDistrictScopeEnum(str, Enum):
    STATEWIDE = "statewide"
    CONGRESSIONAL = "congressional"
    STATE_UPPER = "stateUpper"
    STATE_LOWER = "stateLower"
    COUNTYWIDE = "countywide"
    JUDICIAL = "judicial"
    SCHOOL_BOARD = "schoolBoard"
    CITYWIDE = "citywide"
    SPECIAL = "special"
    COUNTY_COUNCIL = "countyCouncil"
    TOWNSHIP = "township"
    WARD = "ward"
    CITY_COUNCIL = "cityCouncil"
    NATIONAL = "national"


@dataclass_json
@dataclass
class ElectoralDistrict:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scope: Optional[ElectoralDistrictScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
