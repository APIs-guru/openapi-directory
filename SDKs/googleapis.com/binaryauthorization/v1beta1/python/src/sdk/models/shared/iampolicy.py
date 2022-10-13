from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import binding


@dataclass_json
@dataclass
class IamPolicy:
    bindings: Optional[List[binding.Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
