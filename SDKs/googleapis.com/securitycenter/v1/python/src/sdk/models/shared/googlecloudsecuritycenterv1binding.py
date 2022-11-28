from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1Binding:
    r"""GoogleCloudSecuritycenterV1Binding
    Represents a Kubernetes RoleBinding or ClusterRoleBinding.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    role: Optional[Role] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    subjects: Optional[List[Subject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    
