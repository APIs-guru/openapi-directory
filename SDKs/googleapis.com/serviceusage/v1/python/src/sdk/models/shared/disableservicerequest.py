from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DisableServiceRequestCheckIfServiceHasUsageEnum(str, Enum):
    CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED"
    SKIP = "SKIP"
    CHECK = "CHECK"


@dataclass_json
@dataclass
class DisableServiceRequest:
    r"""DisableServiceRequest
    Request message for the `DisableService` method.
    """
    
    check_if_service_has_usage: Optional[DisableServiceRequestCheckIfServiceHasUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkIfServiceHasUsage') }})
    disable_dependent_services: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDependentServices') }})
    
