from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientconfig


@dataclass_json
@dataclass
class ClientStatusResponse:
    config: Optional[List[clientconfig.ClientConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
