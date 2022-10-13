from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AssignedUserRoleUserRoleEnum(str, Enum):
    USER_ROLE_UNSPECIFIED = "USER_ROLE_UNSPECIFIED"
    ADMIN = "ADMIN"
    ADMIN_PARTNER_CLIENT = "ADMIN_PARTNER_CLIENT"
    STANDARD = "STANDARD"
    STANDARD_PLANNER = "STANDARD_PLANNER"
    STANDARD_PLANNER_LIMITED = "STANDARD_PLANNER_LIMITED"
    STANDARD_PARTNER_CLIENT = "STANDARD_PARTNER_CLIENT"
    READ_ONLY = "READ_ONLY"
    REPORTING_ONLY = "REPORTING_ONLY"
    LIMITED_REPORTING_ONLY = "LIMITED_REPORTING_ONLY"
    CREATIVE = "CREATIVE"
    CREATIVE_ADMIN = "CREATIVE_ADMIN"


@dataclass_json
@dataclass
class AssignedUserRole:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    assigned_user_role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedUserRoleId' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    user_role: Optional[AssignedUserRoleUserRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRole' }})
    
