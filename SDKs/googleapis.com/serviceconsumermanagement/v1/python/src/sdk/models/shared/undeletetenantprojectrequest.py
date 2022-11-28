from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UndeleteTenantProjectRequest:
    r"""UndeleteTenantProjectRequest
    Request message to undelete tenant project resource previously deleted from the tenancy unit.
    """
    
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
