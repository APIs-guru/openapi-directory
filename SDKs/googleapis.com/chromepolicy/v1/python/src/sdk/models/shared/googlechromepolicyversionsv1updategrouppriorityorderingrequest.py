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
class GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest:
    r"""GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest
    Request message for updating the group priority ordering of an app.
    """
    
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIds') }})
    policy_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyNamespace') }})
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    
