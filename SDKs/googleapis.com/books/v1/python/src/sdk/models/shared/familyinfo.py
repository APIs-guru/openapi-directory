from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FamilyInfoMembership:
    r"""FamilyInfoMembership
    Family membership info of the user that made the request.
    """
    
    acquire_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquirePermission') }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageGroup') }})
    allowed_maturity_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedMaturityRating') }})
    is_in_family: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInFamily') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclass
class FamilyInfo:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    membership: Optional[FamilyInfoMembership] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    
