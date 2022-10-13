from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DebugOptions:
    enable_hot_key_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableHotKeyLogging' }})
    
