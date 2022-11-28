from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeTaints:
    r"""NodeTaints
    Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
    """
    
    taints: Optional[List[NodeTaint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    
