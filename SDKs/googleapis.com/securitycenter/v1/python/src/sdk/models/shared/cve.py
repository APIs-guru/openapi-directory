from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cvssv3
from . import reference


@dataclass_json
@dataclass
class Cve:
    cvssv3: Optional[cvssv3.Cvssv3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvssv3' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    references: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    upstream_fix_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstreamFixAvailable' }})
    
