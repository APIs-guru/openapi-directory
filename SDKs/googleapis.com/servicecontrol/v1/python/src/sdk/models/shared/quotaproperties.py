from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class QuotaPropertiesQuotaModeEnum(str, Enum):
    ACQUIRE = "ACQUIRE"
    ACQUIRE_BEST_EFFORT = "ACQUIRE_BEST_EFFORT"
    CHECK = "CHECK"
    RELEASE = "RELEASE"


@dataclass_json
@dataclass
class QuotaProperties:
    quota_mode: Optional[QuotaPropertiesQuotaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMode' }})
    
