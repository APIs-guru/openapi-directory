from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig:
    accelerator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorCount' }})
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorType' }})
    
