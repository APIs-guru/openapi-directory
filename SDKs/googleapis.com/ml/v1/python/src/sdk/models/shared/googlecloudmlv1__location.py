from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__capability


@dataclass_json
@dataclass
class GoogleCloudMlV1Location:
    capabilities: Optional[List[googlecloudmlv1__capability.GoogleCloudMlV1Capability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
