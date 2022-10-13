from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillingDestination:
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    monitored_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResource' }})
    
