from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionConfig:
    idle_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleTtl' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    subnetwork_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkUri' }})
    
