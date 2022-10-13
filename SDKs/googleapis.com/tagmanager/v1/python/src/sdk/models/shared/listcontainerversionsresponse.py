from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerversion
from . import containerversionheader


@dataclass_json
@dataclass
class ListContainerVersionsResponse:
    container_version: Optional[List[containerversion.ContainerVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersion' }})
    container_version_header: Optional[List[containerversionheader.ContainerVersionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionHeader' }})
    
