from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RrSetRoutingPolicy:
    r"""RrSetRoutingPolicy
    A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
    """
    
    geo: Optional[RrSetRoutingPolicyGeoPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    primary_backup: Optional[RrSetRoutingPolicyPrimaryBackupPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryBackup') }})
    wrr: Optional[RrSetRoutingPolicyWrrPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrr') }})
    
