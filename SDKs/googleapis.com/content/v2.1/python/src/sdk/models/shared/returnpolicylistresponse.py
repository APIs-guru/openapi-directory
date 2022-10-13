from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicy


@dataclass_json
@dataclass
class ReturnpolicyListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    resources: Optional[List[returnpolicy.ReturnPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
