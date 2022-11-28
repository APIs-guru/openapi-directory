from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContactGroupGroupTypeEnum(str, Enum):
    GROUP_TYPE_UNSPECIFIED = "GROUP_TYPE_UNSPECIFIED"
    USER_CONTACT_GROUP = "USER_CONTACT_GROUP"
    SYSTEM_CONTACT_GROUP = "SYSTEM_CONTACT_GROUP"


@dataclass_json
@dataclass
class ContactGroup:
    r"""ContactGroup
    A contact group.
    """
    
    client_data: Optional[List[GroupClientData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    formatted_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedName') }})
    group_type: Optional[ContactGroupGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    member_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberCount') }})
    member_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberResourceNames') }})
    metadata: Optional[ContactGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    

@dataclass_json
@dataclass
class ContactGroupInput:
    r"""ContactGroupInput
    A contact group.
    """
    
    client_data: Optional[List[GroupClientData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
