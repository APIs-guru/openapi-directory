from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backendrule


@dataclass_json
@dataclass
class Backend:
    rules: Optional[List[backendrule.BackendRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
