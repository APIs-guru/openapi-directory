from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyDelegationSettings:
    r"""PolicyDelegationSettings
    PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
    """
    
    iam_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPermission') }})
    iam_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamServiceName') }})
    policy_name: Optional[PolicyName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyName') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
