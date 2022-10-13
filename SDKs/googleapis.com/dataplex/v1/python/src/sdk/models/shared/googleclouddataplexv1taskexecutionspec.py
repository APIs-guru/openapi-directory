from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskExecutionSpec:
    args: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    max_job_execution_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJobExecutionLifetime' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    
