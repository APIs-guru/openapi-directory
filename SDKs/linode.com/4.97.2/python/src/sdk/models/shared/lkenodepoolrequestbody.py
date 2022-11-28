from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LkeNodePoolRequestBody:
    r"""LkeNodePoolRequestBody
    Specifies a collection of Linodes which will be members of a Kubernetes cluster.
    
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    disks: Optional[List[Items]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
