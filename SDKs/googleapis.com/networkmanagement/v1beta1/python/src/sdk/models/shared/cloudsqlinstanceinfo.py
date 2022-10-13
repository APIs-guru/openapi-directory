from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudSQLInstanceInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIp' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIp' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
