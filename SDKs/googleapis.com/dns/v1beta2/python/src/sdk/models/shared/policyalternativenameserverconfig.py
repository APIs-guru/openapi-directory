from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyalternativenameserverconfigtargetnameserver


@dataclass_json
@dataclass
class PolicyAlternativeNameServerConfig:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    target_name_servers: Optional[List[policyalternativenameserverconfigtargetnameserver.PolicyAlternativeNameServerConfigTargetNameServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNameServers' }})
    
