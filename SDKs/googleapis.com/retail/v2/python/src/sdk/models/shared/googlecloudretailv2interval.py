from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2Interval:
    exclusive_maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusiveMaximum' }})
    exclusive_minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusiveMinimum' }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    
