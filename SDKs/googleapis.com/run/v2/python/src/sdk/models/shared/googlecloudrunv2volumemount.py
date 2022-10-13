from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRunV2VolumeMount:
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPath' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
