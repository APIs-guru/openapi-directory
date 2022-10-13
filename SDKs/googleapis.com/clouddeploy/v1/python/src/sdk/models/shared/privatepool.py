from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrivatePool:
    artifact_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStorage' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
