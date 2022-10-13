from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OperatingSystem:
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartId' }})
    desktop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktop' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
