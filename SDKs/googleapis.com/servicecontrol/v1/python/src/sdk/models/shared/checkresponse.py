from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckResponse:
    r"""CheckResponse
    Response message for the Check method.
    """
    
    check_errors: Optional[List[CheckError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkErrors') }})
    check_info: Optional[CheckInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkInfo') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_info: Optional[QuotaInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaInfo') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    service_rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRolloutId') }})
    
