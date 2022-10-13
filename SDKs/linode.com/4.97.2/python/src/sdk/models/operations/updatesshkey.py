from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSSHKeyPathParams:
    ssh_key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'sshKeyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSSHKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateSSHKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSSHKeySecurity:
    option1: Optional[UpdateSSHKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateSSHKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateSSHKeyRequest:
    path_params: UpdateSSHKeyPathParams = field(default=None)
    request: shared.SSHKey = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSSHKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateSSHKeyResponse:
    content_type: str = field(default=None)
    ssh_key: Optional[shared.SSHKey] = field(default=None)
    status_code: int = field(default=None)
    update_ssh_key_default_application_json_object: Optional[UpdateSSHKeyDefaultApplicationJSON] = field(default=None)
    
