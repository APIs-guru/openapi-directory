from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaxPodsConstraint:
    r"""MaxPodsConstraint
    Constraints applied to pods.
    """
    
    max_pods_per_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPodsPerNode') }})
    
