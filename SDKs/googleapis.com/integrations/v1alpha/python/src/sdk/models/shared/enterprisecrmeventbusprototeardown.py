from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototeardowntaskconfig


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTeardown:
    teardown_task_configs: Optional[List[enterprisecrmeventbusprototeardowntaskconfig.EnterpriseCrmEventbusProtoTeardownTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teardownTaskConfigs' }})
    
