from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IntraNodeVisibilityConfig:
    r"""IntraNodeVisibilityConfig
    IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
