from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultSnatStatus:
    r"""DefaultSnatStatus
    DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
    """
    
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    
