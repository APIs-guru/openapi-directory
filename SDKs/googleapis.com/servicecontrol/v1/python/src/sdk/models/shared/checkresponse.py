from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import checkerror
from . import checkinfo
from . import quotainfo


@dataclass_json
@dataclass
class CheckResponse:
    check_errors: Optional[List[checkerror.CheckError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkErrors' }})
    check_info: Optional[checkinfo.CheckInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkInfo' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    quota_info: Optional[quotainfo.QuotaInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaInfo' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    service_rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRolloutId' }})
    
