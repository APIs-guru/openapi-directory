from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicasDeleteRequest:
    abandon_instance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abandonInstance' }})
    
