from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IlbSubsettingConfig:
    r"""IlbSubsettingConfig
    ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
