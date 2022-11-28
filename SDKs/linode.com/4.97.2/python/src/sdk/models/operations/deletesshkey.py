from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteSSHKeyPathParams:
    ssh_key_id: int = field(metadata={'path_param': { 'field_name': 'sshKeyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteSSHKeyRequest:
    path_params: DeleteSSHKeyPathParams = field()
    security: DeleteSSHKeySecurity = field()
    

@dataclass
class DeleteSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    delete_ssh_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_ssh_key_default_application_json_object: Optional[DeleteSSHKeyDefaultApplicationJSON] = field(default=None)
    
