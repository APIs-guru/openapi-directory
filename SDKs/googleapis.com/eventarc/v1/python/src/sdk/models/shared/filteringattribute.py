from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilteringAttribute:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    path_pattern_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathPatternSupported' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    
