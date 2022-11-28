from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocateQuotaRequest:
    r"""AllocateQuotaRequest
    Request message for the AllocateQuota method.
    """
    
    allocate_operation: Optional[QuotaOperation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateOperation') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
