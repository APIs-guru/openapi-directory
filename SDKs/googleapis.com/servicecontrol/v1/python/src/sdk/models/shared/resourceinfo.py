from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceInfo:
    r"""ResourceInfo
    Describes a resource associated with this operation.
    """
    
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    resource_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceContainer') }})
    resource_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLocation') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
