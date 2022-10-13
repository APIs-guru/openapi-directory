from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest:
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    return_secure_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnSecureToken' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
