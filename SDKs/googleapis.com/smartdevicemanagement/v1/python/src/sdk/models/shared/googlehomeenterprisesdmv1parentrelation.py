from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ParentRelation:
    r"""GoogleHomeEnterpriseSdmV1ParentRelation
    Represents device relationships, for instance, structure/room to which the device is assigned to.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
