from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import policy


@dataclass_json
@dataclass
class PoliciesPatchResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
