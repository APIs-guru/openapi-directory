from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import onpremdomainsiddetails

class CheckMigrationPermissionResponseStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    NEEDS_MAINTENANCE = "NEEDS_MAINTENANCE"


@dataclass_json
@dataclass
class CheckMigrationPermissionResponse:
    onprem_domains: Optional[List[onpremdomainsiddetails.OnPremDomainSidDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onpremDomains' }})
    state: Optional[CheckMigrationPermissionResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
