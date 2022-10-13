from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import request
from . import writecontrol


@dataclass_json
@dataclass
class BatchUpdatePresentationRequest:
    requests: Optional[List[request.Request]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    write_control: Optional[writecontrol.WriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
