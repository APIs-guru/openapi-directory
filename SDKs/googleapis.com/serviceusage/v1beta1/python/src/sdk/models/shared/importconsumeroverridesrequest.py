from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import overrideinlinesource

class ImportConsumerOverridesRequestForceOnlyEnum(str, Enum):
    QUOTA_SAFETY_CHECK_UNSPECIFIED = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
    LIMIT_DECREASE_BELOW_USAGE = "LIMIT_DECREASE_BELOW_USAGE"
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"


@dataclass_json
@dataclass
class ImportConsumerOverridesRequest:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    force_only: Optional[List[ImportConsumerOverridesRequestForceOnlyEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceOnly' }})
    inline_source: Optional[overrideinlinesource.OverrideInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineSource' }})
    
