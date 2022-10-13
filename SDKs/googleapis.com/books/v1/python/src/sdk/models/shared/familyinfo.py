from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FamilyInfoMembership:
    acquire_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquirePermission' }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGroup' }})
    allowed_maturity_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedMaturityRating' }})
    is_in_family: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInFamily' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class FamilyInfo:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    membership: Optional[FamilyInfoMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    
