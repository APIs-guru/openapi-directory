from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerversion


@dataclass_json
@dataclass
class CreateContainerVersionResponse:
    compiler_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compilerError' }})
    container_version: Optional[containerversion.ContainerVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersion' }})
    
