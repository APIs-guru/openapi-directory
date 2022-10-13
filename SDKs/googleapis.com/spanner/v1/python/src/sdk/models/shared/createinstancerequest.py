from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instance


@dataclass_json
@dataclass
class CreateInstanceRequest:
    instance: Optional[instance.Instance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    
