from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GkeMasterInfo:
    cluster_network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterNetworkUri' }})
    cluster_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUri' }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIp' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIp' }})
    
