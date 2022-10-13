from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import membershipsduration
from . import membershipsdurationatlevel


@dataclass_json
@dataclass
class MembershipsDetails:
    accessible_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibleLevels' }})
    highest_accessible_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highestAccessibleLevel' }})
    highest_accessible_level_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highestAccessibleLevelDisplayName' }})
    memberships_duration: Optional[membershipsduration.MembershipsDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipsDuration' }})
    memberships_duration_at_levels: Optional[List[membershipsdurationatlevel.MembershipsDurationAtLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipsDurationAtLevels' }})
    
