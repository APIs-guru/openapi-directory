from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Connection:
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    peering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peering' }})
    reserved_peering_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedPeeringRanges' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
