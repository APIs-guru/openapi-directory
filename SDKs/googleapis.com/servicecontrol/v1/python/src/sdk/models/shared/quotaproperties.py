from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QuotaPropertiesQuotaModeEnum(str, Enum):
    ACQUIRE = "ACQUIRE"
    ACQUIRE_BEST_EFFORT = "ACQUIRE_BEST_EFFORT"
    CHECK = "CHECK"
    RELEASE = "RELEASE"


@dataclass_json
@dataclass
class QuotaProperties:
    r"""QuotaProperties
    Represents the properties needed for quota operations.
    """
    
    quota_mode: Optional[QuotaPropertiesQuotaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMode') }})
    
