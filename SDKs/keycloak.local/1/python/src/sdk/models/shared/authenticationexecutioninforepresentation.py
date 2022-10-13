from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthenticationExecutionInfoRepresentation:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    authentication_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationConfig' }})
    authentication_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationFlow' }})
    configurable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurable' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirement' }})
    requirement_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirementChoices' }})
    
