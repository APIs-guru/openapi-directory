from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sandboxuser


@dataclass_json
@dataclass
class Sandbox:
    sandbox_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sandboxId' }})
    users: Optional[List[sandboxuser.SandboxUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
