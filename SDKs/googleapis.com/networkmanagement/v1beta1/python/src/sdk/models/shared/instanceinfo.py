from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIp' }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIp' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
