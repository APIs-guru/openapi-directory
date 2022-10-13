from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import membershiprole
from . import updatemembershiprolesparams


@dataclass_json
@dataclass
class ModifyMembershipRolesRequest:
    add_roles: Optional[List[membershiprole.MembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addRoles' }})
    remove_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeRoles' }})
    update_roles_params: Optional[List[updatemembershiprolesparams.UpdateMembershipRolesParams]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateRolesParams' }})
    
