from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import execution
from . import listmeta


@dataclass_json
@dataclass
class ListExecutionsResponse:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    items: Optional[List[execution.Execution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[listmeta.ListMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
