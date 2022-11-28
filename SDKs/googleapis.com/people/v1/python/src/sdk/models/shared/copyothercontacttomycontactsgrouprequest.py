from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CopyOtherContactToMyContactsGroupRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class CopyOtherContactToMyContactsGroupRequest:
    r"""CopyOtherContactToMyContactsGroupRequest
    A request to copy an \"Other contact\" to my contacts group.
    """
    
    copy_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyMask') }})
    read_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readMask') }})
    sources: Optional[List[CopyOtherContactToMyContactsGroupRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
