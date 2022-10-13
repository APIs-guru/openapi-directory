from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import principal
from . import principal
from . import principal

class ItemACLACLInheritanceTypeEnum(str, Enum):
    NOT_APPLICABLE = "NOT_APPLICABLE"
    CHILD_OVERRIDE = "CHILD_OVERRIDE"
    PARENT_OVERRIDE = "PARENT_OVERRIDE"
    BOTH_PERMIT = "BOTH_PERMIT"


@dataclass_json
@dataclass
class ItemACL:
    acl_inheritance_type: Optional[ItemACLACLInheritanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aclInheritanceType' }})
    denied_readers: Optional[List[principal.Principal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniedReaders' }})
    inherit_acl_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritAclFrom' }})
    owners: Optional[List[principal.Principal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    readers: Optional[List[principal.Principal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readers' }})
    
