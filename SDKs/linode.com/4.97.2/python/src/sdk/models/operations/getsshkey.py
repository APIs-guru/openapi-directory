from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSSHKeyPathParams:
    ssh_key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'sshKeyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSSHKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSSHKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSSHKeySecurity:
    option1: Optional[GetSSHKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSSHKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSSHKeyRequest:
    path_params: GetSSHKeyPathParams = field(default=None)
    security: GetSSHKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetSSHKeyResponse:
    content_type: str = field(default=None)
    ssh_key: Optional[shared.SSHKey] = field(default=None)
    status_code: int = field(default=None)
    get_ssh_key_default_application_json_object: Optional[GetSSHKeyDefaultApplicationJSON] = field(default=None)
    
