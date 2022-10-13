from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class AuthenticationObject:
    authentication_method_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationMethodId' }})
    authentication_type: authenticationtype_enum.AuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    authentication_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationVersion' }})
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
