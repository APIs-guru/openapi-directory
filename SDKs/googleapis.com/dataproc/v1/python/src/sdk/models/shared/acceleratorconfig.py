from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AcceleratorConfig:
    accelerator_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorCount' }})
    accelerator_type_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorTypeUri' }})
    
