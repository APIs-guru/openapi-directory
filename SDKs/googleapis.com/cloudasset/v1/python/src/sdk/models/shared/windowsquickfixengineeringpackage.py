from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WindowsQuickFixEngineeringPackage:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hot_fix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotFixId' }})
    install_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installTime' }})
    
