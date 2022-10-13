from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import binding
from . import policy


@dataclass_json
@dataclass
class GlobalSetPolicyRequest:
    bindings: Optional[List[binding.Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
