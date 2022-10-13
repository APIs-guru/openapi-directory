from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkerSettings:
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUrl' }})
    reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingEnabled' }})
    service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePath' }})
    shuffle_service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shuffleServicePath' }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempStoragePrefix' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
