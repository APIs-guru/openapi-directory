from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HotKeyDetection:
    hot_key_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotKeyAge' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    user_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userStepName' }})
    
