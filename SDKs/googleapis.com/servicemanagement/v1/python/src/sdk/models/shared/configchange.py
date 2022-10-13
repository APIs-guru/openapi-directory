from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import advice

class ConfigChangeChangeTypeEnum(str, Enum):
    CHANGE_TYPE_UNSPECIFIED = "CHANGE_TYPE_UNSPECIFIED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"
    MODIFIED = "MODIFIED"


@dataclass_json
@dataclass
class ConfigChange:
    advices: Optional[List[advice.Advice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advices' }})
    change_type: Optional[ConfigChangeChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    element: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'element' }})
    new_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    old_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldValue' }})
    
