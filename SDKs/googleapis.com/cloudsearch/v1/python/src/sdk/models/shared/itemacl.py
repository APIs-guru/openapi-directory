from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemACLACLInheritanceTypeEnum(str, Enum):
    NOT_APPLICABLE = "NOT_APPLICABLE"
    CHILD_OVERRIDE = "CHILD_OVERRIDE"
    PARENT_OVERRIDE = "PARENT_OVERRIDE"
    BOTH_PERMIT = "BOTH_PERMIT"


@dataclass_json
@dataclass
class ItemACL:
    r"""ItemACL
    Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
    """
    
    acl_inheritance_type: Optional[ItemACLACLInheritanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aclInheritanceType') }})
    denied_readers: Optional[List[Principal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deniedReaders') }})
    inherit_acl_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritAclFrom') }})
    owners: Optional[List[Principal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    readers: Optional[List[Principal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readers') }})
    
