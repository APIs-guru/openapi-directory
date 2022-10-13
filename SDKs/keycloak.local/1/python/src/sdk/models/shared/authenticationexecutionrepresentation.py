from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthenticationExecutionRepresentation:
    authenticator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticator' }})
    authenticator_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticatorConfig' }})
    authenticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticatorFlow' }})
    autheticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autheticatorFlow' }})
    flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parent_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFlow' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirement' }})
    
