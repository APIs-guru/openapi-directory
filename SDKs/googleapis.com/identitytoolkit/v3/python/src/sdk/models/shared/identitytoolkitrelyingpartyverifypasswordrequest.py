from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyPasswordRequest:
    captcha_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captchaChallenge' }})
    captcha_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captchaResponse' }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pending_id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingIdToken' }})
    return_secure_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnSecureToken' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    tenant_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectNumber' }})
    
