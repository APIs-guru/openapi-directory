from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DisableServiceRequestCheckIfServiceHasUsageEnum(str, Enum):
    CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED"
    SKIP = "SKIP"
    CHECK = "CHECK"


@dataclass_json
@dataclass
class DisableServiceRequest:
    check_if_service_has_usage: Optional[DisableServiceRequestCheckIfServiceHasUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkIfServiceHasUsage' }})
    disable_dependent_services: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableDependentServices' }})
    
