from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hookeditfields


@dataclass_json
@dataclass
class HookEdit:
    hook: Optional[hookeditfields.HookEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hook' }})
    
