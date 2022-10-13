from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keytopath


@dataclass_json
@dataclass
class ConfigMapVolumeSource:
    default_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultMode' }})
    items: Optional[List[keytopath.KeyToPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional' }})
    
