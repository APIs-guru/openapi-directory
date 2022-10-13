from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudrunservice


@dataclass_json
@dataclass
class Destination:
    cloud_run_service: Optional[cloudrunservice.CloudRunService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRunService' }})
    
