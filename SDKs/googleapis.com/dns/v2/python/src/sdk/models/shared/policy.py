from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyalternativenameserverconfig
from . import policynetwork


@dataclass_json
@dataclass
class Policy:
    alternative_name_server_config: Optional[policyalternativenameserverconfig.PolicyAlternativeNameServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeNameServerConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enable_inbound_forwarding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableInboundForwarding' }})
    enable_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableLogging' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Optional[List[policynetwork.PolicyNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    
