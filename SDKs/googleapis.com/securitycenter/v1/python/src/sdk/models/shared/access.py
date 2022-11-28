from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Access:
    r"""Access
    Represents an access event.
    """
    
    caller_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerIp') }})
    caller_ip_geo: Optional[Geolocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerIpGeo') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    principal_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalEmail') }})
    principal_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalSubject') }})
    service_account_delegation_info: Optional[List[ServiceAccountDelegationInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountDelegationInfo') }})
    service_account_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountKeyName') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    user_agent_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgentFamily') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
