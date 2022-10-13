from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyAssertionRequest:
    auto_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoCreate' }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    pending_id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingIdToken' }})
    post_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postBody' }})
    request_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestUri' }})
    return_idp_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnIdpCredential' }})
    return_refresh_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnRefreshToken' }})
    return_secure_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnSecureToken' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    tenant_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectNumber' }})
    
