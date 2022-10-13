from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trigger


@dataclass_json
@dataclass
class ListTriggersResponse:
    triggers: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    
