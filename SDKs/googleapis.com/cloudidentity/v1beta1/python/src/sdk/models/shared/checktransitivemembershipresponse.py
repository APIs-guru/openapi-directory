from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckTransitiveMembershipResponse:
    r"""CheckTransitiveMembershipResponse
    The response message for MembershipsService.CheckTransitiveMembership.
    """
    
    has_membership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMembership') }})
    
