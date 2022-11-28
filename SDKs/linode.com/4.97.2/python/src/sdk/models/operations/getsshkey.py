from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSSHKeyPathParams:
    ssh_key_id: int = field(metadata={'path_param': { 'field_name': 'sshKeyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSSHKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetSSHKeyRequest:
    path_params: GetSSHKeyPathParams = field()
    security: GetSSHKeySecurity = field()
    

@dataclass
class GetSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    ssh_key: Optional[shared.SSHKey] = field(default=None)
    get_ssh_key_default_application_json_object: Optional[GetSSHKeyDefaultApplicationJSON] = field(default=None)
    
