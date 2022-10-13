from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcegroup

class OsPolicyModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    VALIDATION = "VALIDATION"
    ENFORCEMENT = "ENFORCEMENT"


@dataclass_json
@dataclass
class OsPolicy:
    allow_no_resource_group_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowNoResourceGroupMatch' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mode: Optional[OsPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    resource_groups: Optional[List[ospolicyresourcegroup.OsPolicyResourceGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroups' }})
    
