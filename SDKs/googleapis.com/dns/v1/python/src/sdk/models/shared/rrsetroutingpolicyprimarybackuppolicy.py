from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicyPrimaryBackupPolicy:
    r"""RrSetRoutingPolicyPrimaryBackupPolicy
    Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
    """
    
    backup_geo_targets: Optional[RrSetRoutingPolicyGeoPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupGeoTargets') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    primary_targets: Optional[RrSetRoutingPolicyHealthCheckTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryTargets') }})
    trickle_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trickleTraffic') }})
    
