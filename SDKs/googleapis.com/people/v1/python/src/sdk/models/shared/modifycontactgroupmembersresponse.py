from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyContactGroupMembersResponse:
    r"""ModifyContactGroupMembersResponse
    The response to a modify contact group members request.
    """
    
    can_not_remove_last_contact_group_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canNotRemoveLastContactGroupResourceNames') }})
    not_found_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notFoundResourceNames') }})
    
