from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceSelector:
    r"""ResourceSelector
    Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
    """
    
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
