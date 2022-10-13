from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedService:
    producer_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerProjectId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
