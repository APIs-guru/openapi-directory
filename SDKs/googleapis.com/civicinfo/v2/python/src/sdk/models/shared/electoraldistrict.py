from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ElectoralDistrict
    Describes the geographic scope of a contest.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[ElectoralDistrictScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
