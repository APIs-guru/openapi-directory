from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponsePolicy:
    r"""ResponsePolicy
    A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    gke_clusters: Optional[List[ResponsePolicyGkeCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    networks: Optional[List[ResponsePolicyNetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    response_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicyName') }})
    
