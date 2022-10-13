from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfidentialInstanceConfig:
    enable_confidential_compute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableConfidentialCompute' }})
    
