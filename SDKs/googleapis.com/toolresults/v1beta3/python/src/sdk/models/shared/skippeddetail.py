from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SkippedDetail:
    incompatible_app_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibleAppVersion' }})
    incompatible_architecture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibleArchitecture' }})
    incompatible_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibleDevice' }})
    
