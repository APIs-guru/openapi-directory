from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceLimit:
    r"""ResourceLimit
    Contains information about amount of some resource in the cluster. For memory, value should be in GB.
    """
    
    maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
