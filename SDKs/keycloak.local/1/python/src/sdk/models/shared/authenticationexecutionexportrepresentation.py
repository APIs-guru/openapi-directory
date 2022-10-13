from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthenticationExecutionExportRepresentation:
    authenticator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticator' }})
    authenticator_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticatorConfig' }})
    authenticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticatorFlow' }})
    autheticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autheticatorFlow' }})
    flow_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowAlias' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirement' }})
    user_setup_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSetupAllowed' }})
    
