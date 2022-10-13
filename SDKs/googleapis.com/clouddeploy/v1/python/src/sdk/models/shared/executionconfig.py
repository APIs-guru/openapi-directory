from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import defaultpool
from . import privatepool

class ExecutionConfigUsagesEnum(str, Enum):
    EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
    RENDER = "RENDER"
    DEPLOY = "DEPLOY"
    VERIFY = "VERIFY"


@dataclass_json
@dataclass
class ExecutionConfig:
    artifact_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStorage' }})
    default_pool: Optional[defaultpool.DefaultPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPool' }})
    execution_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTimeout' }})
    private_pool: Optional[privatepool.PrivatePool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privatePool' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    usages: Optional[List[ExecutionConfigUsagesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usages' }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
