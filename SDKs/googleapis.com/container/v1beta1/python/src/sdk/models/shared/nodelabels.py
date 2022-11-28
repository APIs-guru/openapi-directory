from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodeLabels:
    r"""NodeLabels
    Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
