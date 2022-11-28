from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContactGroupMembershipInput:
    r"""ContactGroupMembershipInput
    A Google contact group membership.
    """
    
    contact_group_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupResourceName') }})
    

@dataclass_json
@dataclass
class ContactGroupMembership:
    r"""ContactGroupMembership
    A Google contact group membership.
    """
    
    contact_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupId') }})
    contact_group_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupResourceName') }})
    
