from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactGroupResponse:
    r"""ContactGroupResponse
    The response for a specific contact group.
    """
    
    contact_group: Optional[ContactGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceName') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
