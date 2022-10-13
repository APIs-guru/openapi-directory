from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resource

class RoleGrantPrincipalEnum(str, Enum):
    PRINCIPAL_UNSPECIFIED = "PRINCIPAL_UNSPECIFIED"
    CONNECTOR_SA = "CONNECTOR_SA"


@dataclass_json
@dataclass
class RoleGrant:
    helper_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helperTextTemplate' }})
    principal: Optional[RoleGrantPrincipalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
