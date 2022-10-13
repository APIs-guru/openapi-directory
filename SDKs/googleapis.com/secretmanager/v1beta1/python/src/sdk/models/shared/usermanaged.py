from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replica


@dataclass_json
@dataclass
class UserManaged:
    replicas: Optional[List[replica.Replica]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicas' }})
    
