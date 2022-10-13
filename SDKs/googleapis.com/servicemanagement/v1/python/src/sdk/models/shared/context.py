from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextrule


@dataclass_json
@dataclass
class Context:
    rules: Optional[List[contextrule.ContextRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
