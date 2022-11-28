from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ImportAdminOverridesRequestForceOnlyEnum(str, Enum):
    QUOTA_SAFETY_CHECK_UNSPECIFIED = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
    LIMIT_DECREASE_BELOW_USAGE = "LIMIT_DECREASE_BELOW_USAGE"
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"


@dataclass_json
@dataclass
class ImportAdminOverridesRequest:
    r"""ImportAdminOverridesRequest
    Request message for ImportAdminOverrides
    """
    
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    force_only: Optional[List[ImportAdminOverridesRequestForceOnlyEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceOnly') }})
    inline_source: Optional[OverrideInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
