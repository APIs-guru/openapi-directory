from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyMembershipRolesRequest:
    r"""ModifyMembershipRolesRequest
    The request message for MembershipsService.ModifyMembershipRoles.
    """
    
    add_roles: Optional[List[MembershipRole1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addRoles') }})
    remove_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeRoles') }})
    update_roles_params: Optional[List[UpdateMembershipRolesParams]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateRolesParams') }})
    
