from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pod:
    r"""Pod
    Kubernetes Pod.
    """
    
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    
