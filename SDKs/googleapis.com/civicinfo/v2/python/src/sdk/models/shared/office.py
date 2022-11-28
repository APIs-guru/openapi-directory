from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OfficeLevelsEnum(str, Enum):
    INTERNATIONAL = "international"
    COUNTRY = "country"
    ADMINISTRATIVE_AREA1 = "administrativeArea1"
    REGIONAL = "regional"
    ADMINISTRATIVE_AREA2 = "administrativeArea2"
    LOCALITY = "locality"
    SUB_LOCALITY1 = "subLocality1"
    SUB_LOCALITY2 = "subLocality2"
    SPECIAL = "special"

class OfficeRolesEnum(str, Enum):
    HEAD_OF_STATE = "headOfState"
    HEAD_OF_GOVERNMENT = "headOfGovernment"
    DEPUTY_HEAD_OF_GOVERNMENT = "deputyHeadOfGovernment"
    GOVERNMENT_OFFICER = "governmentOfficer"
    EXECUTIVE_COUNCIL = "executiveCouncil"
    LEGISLATOR_UPPER_BODY = "legislatorUpperBody"
    LEGISLATOR_LOWER_BODY = "legislatorLowerBody"
    HIGHEST_COURT_JUDGE = "highestCourtJudge"
    JUDGE = "judge"
    SCHOOL_BOARD = "schoolBoard"
    SPECIAL_PURPOSE_OFFICER = "specialPurposeOfficer"
    OTHER_ROLE = "otherRole"


@dataclass_json
@dataclass
class Office:
    r"""Office
    Information about an Office held by one or more Officials.
    """
    
    division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisionId') }})
    levels: Optional[List[OfficeLevelsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    official_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('officialIndices') }})
    roles: Optional[List[OfficeRolesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
