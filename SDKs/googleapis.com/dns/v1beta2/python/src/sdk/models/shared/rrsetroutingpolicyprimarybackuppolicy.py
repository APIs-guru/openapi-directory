from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rrsetroutingpolicygeopolicy
from . import rrsetroutingpolicyhealthchecktargets


@dataclass_json
@dataclass
class RrSetRoutingPolicyPrimaryBackupPolicy:
    backup_geo_targets: Optional[rrsetroutingpolicygeopolicy.RrSetRoutingPolicyGeoPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupGeoTargets' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    primary_targets: Optional[rrsetroutingpolicyhealthchecktargets.RrSetRoutingPolicyHealthCheckTargets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryTargets' }})
    trickle_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trickleTraffic' }})
    
