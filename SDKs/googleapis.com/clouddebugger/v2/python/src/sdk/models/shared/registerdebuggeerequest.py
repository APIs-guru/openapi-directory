from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import debuggee


@dataclass_json
@dataclass
class RegisterDebuggeeRequest:
    debuggee: Optional[debuggee.Debuggee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debuggee' }})
    
