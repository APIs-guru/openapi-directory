from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customviewabilitymetricconfiguration


@dataclass_json
@dataclass
class CustomViewabilityMetric:
    configuration: Optional[customviewabilitymetricconfiguration.CustomViewabilityMetricConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
