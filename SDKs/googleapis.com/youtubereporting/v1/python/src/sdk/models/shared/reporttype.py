from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportType:
    deprecate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecateTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    system_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemManaged' }})
    
