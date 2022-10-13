from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddSubnetworkRequest:
    consumer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer' }})
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipPrefixLength' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    requested_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAddress' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    subnetwork_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkUsers' }})
    
