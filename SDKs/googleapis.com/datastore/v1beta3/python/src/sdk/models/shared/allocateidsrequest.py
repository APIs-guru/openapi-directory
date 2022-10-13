from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key


@dataclass_json
@dataclass
class AllocateIdsRequest:
    keys: Optional[List[key.Key]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    
