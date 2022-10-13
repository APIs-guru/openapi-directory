from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class Error:
    point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointCount' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
