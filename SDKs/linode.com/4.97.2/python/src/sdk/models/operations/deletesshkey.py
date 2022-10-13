from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteSSHKeyPathParams:
    ssh_key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'sshKeyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteSSHKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSSHKeySecurity:
    option1: Optional[DeleteSSHKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteSSHKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteSSHKeyRequest:
    path_params: DeleteSSHKeyPathParams = field(default=None)
    security: DeleteSSHKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteSSHKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_ssh_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_ssh_key_default_application_json_object: Optional[DeleteSSHKeyDefaultApplicationJSON] = field(default=None)
    
