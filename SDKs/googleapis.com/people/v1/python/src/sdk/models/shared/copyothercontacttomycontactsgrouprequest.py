from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CopyOtherContactToMyContactsGroupRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class CopyOtherContactToMyContactsGroupRequest:
    copy_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyMask' }})
    read_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readMask' }})
    sources: Optional[List[CopyOtherContactToMyContactsGroupRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
