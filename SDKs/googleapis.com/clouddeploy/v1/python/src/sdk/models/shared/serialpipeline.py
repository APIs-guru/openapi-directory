from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stage


@dataclass_json
@dataclass
class SerialPipeline:
    stages: Optional[List[stage.Stage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stages' }})
    
