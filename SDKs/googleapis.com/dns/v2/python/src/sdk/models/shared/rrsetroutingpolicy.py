from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicygeopolicy
from . import rrsetroutingpolicyprimarybackuppolicy
from . import rrsetroutingpolicywrrpolicy


@dataclass_json
@dataclass
class RrSetRoutingPolicy:
    geo: Optional[rrsetroutingpolicygeopolicy.RrSetRoutingPolicyGeoPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    primary_backup: Optional[rrsetroutingpolicyprimarybackuppolicy.RrSetRoutingPolicyPrimaryBackupPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryBackup' }})
    wrr: Optional[rrsetroutingpolicywrrpolicy.RrSetRoutingPolicyWrrPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wrr' }})
    
