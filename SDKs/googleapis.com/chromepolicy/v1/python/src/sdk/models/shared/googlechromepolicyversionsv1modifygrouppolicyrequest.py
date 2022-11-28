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
class GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest:
    r"""GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest
    Request parameters for modifying a policy value for a specific group target.
    """
    
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    policy_value: Optional[GoogleChromePolicyVersionsV1PolicyValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyValue') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
