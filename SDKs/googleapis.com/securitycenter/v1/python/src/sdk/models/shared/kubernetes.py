from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Kubernetes:
    r"""Kubernetes
    Kubernetes related attributes.
    """
    
    access_reviews: Optional[List[AccessReview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessReviews') }})
    bindings: Optional[List[GoogleCloudSecuritycenterV1Binding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    node_pools: Optional[List[NodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    nodes: Optional[List[Node]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    pods: Optional[List[Pod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pods') }})
    roles: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
