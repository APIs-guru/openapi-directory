from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clonecontext


@dataclass_json
@dataclass
class InstancesCloneRequest:
    clone_context: Optional[clonecontext.CloneContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloneContext' }})
    
