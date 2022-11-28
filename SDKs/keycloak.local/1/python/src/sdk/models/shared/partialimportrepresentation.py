from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PartialImportRepresentationPolicyEnum(str, Enum):
    SKIP = "SKIP"
    OVERWRITE = "OVERWRITE"
    FAIL = "FAIL"


@dataclass_json
@dataclass
class PartialImportRepresentation:
    clients: Optional[List[ClientRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clients') }})
    groups: Optional[List[GroupRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    identity_providers: Optional[List[IdentityProviderRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviders') }})
    if_resource_exists: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ifResourceExists') }})
    policy: Optional[PartialImportRepresentationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    roles: Optional[RolesRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    users: Optional[List[UserRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
