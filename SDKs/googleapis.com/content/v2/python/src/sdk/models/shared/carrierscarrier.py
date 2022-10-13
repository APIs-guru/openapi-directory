from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CarriersCarrier:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    edd_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eddServices' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
