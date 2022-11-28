from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CheckMigrationPermissionResponseStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    NEEDS_MAINTENANCE = "NEEDS_MAINTENANCE"


@dataclass_json
@dataclass
class CheckMigrationPermissionResponse:
    r"""CheckMigrationPermissionResponse
    CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.
    """
    
    onprem_domains: Optional[List[OnPremDomainSidDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onpremDomains') }})
    state: Optional[CheckMigrationPermissionResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
