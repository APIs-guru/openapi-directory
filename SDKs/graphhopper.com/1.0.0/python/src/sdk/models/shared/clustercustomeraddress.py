from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterCustomerAddress:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    street_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_hint' }})
    
