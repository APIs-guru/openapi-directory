from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipRole:
    r"""MembershipRole
    A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
    """
    
    expiry_detail: Optional[ExpiryDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDetail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restriction_evaluations: Optional[RestrictionEvaluations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionEvaluations') }})
    
