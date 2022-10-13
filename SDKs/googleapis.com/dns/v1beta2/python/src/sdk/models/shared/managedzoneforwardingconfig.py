from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedzoneforwardingconfignameservertarget


@dataclass_json
@dataclass
class ManagedZoneForwardingConfig:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    target_name_servers: Optional[List[managedzoneforwardingconfignameservertarget.ManagedZoneForwardingConfigNameServerTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNameServers' }})
    
