from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geolocation
from . import serviceaccountdelegationinfo


@dataclass_json
@dataclass
class Access:
    caller_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callerIp' }})
    caller_ip_geo: Optional[geolocation.Geolocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callerIpGeo' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodName' }})
    principal_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalEmail' }})
    principal_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalSubject' }})
    service_account_delegation_info: Optional[List[serviceaccountdelegationinfo.ServiceAccountDelegationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountDelegationInfo' }})
    service_account_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountKeyName' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    user_agent_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentFamily' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
