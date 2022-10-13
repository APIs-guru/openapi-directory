from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clientrepresentation
from . import grouprepresentation
from . import identityproviderrepresentation
from . import rolesrepresentation
from . import userrepresentation

class PartialImportRepresentationPolicyEnum(str, Enum):
    SKIP = "SKIP"
    OVERWRITE = "OVERWRITE"
    FAIL = "FAIL"


@dataclass_json
@dataclass
class PartialImportRepresentation:
    clients: Optional[List[clientrepresentation.ClientRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clients' }})
    groups: Optional[List[grouprepresentation.GroupRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    identity_providers: Optional[List[identityproviderrepresentation.IdentityProviderRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviders' }})
    if_resource_exists: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ifResourceExists' }})
    policy: Optional[PartialImportRepresentationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    roles: Optional[rolesrepresentation.RolesRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    users: Optional[List[userrepresentation.UserRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
