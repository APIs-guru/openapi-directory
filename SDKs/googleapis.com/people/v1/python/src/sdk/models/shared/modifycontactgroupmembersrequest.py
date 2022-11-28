from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyContactGroupMembersRequest:
    r"""ModifyContactGroupMembersRequest
    A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or \"myContacts\" or \"starred\" system groups.
    """
    
    resource_names_to_add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamesToAdd') }})
    resource_names_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamesToRemove') }})
    
