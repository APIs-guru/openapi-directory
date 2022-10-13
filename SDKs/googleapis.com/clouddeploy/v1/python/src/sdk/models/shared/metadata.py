from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudrunmetadata


@dataclass_json
@dataclass
class Metadata:
    cloud_run: Optional[cloudrunmetadata.CloudRunMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRun' }})
    
