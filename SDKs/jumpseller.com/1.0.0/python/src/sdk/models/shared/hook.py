from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hookfields


@dataclass_json
@dataclass
class Hook:
    hook: Optional[hookfields.HookFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hook' }})
    
