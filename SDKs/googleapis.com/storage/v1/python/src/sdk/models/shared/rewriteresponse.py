from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import object


@dataclass_json
@dataclass
class RewriteResponse:
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    object_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectSize' }})
    resource: Optional[object.Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    rewrite_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewriteToken' }})
    total_bytes_rewritten: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesRewritten' }})
    
