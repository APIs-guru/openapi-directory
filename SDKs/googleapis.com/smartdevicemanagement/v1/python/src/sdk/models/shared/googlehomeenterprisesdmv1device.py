from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1Device:
    r"""GoogleHomeEnterpriseSdmV1Device
    Device resource represents an instance of enterprise managed device in the property.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_relations: Optional[List[GoogleHomeEnterpriseSdmV1ParentRelation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentRelations') }})
    traits: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
