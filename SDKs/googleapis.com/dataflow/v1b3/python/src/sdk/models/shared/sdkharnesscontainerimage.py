from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SdkHarnessContainerImage:
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    use_single_core_per_container: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useSingleCorePerContainer' }})
    
