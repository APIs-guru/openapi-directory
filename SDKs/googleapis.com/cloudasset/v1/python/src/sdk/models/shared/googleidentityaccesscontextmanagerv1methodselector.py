from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1MethodSelector:
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    
