from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerInfoRepresentation:
    builtin_protocol_mappers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtinProtocolMappers') }})
    client_importers: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientImporters') }})
    client_installations: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInstallations') }})
    component_types: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentTypes') }})
    enums: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enums') }})
    identity_providers: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviders') }})
    memory_info: Optional[MemoryInfoRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    password_policies: Optional[List[PasswordPolicyTypeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPolicies') }})
    profile_info: Optional[ProfileInfoRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileInfo') }})
    protocol_mapper_types: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolMapperTypes') }})
    providers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providers') }})
    social_providers: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialProviders') }})
    system_info: Optional[SystemInfoRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemInfo') }})
    themes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themes') }})
    
