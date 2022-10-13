from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicy


@dataclass_json
@dataclass
class ResourceRecordSet:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    routing_policy: Optional[rrsetroutingpolicy.RrSetRoutingPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingPolicy' }})
    rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrdatas' }})
    signature_rrdatas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureRrdatas' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
