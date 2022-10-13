from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResolveServiceRequest:
    endpoint_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointFilter' }})
    max_endpoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEndpoints' }})
    
