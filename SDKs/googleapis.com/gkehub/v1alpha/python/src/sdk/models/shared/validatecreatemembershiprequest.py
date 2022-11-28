from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidateCreateMembershipRequestInput:
    r"""ValidateCreateMembershipRequestInput
    Request message for the `GkeHub.ValidateCreateMembership` method.
    """
    
    membership: Optional[MembershipInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    membership_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipId') }})
    
