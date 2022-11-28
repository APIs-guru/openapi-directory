from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddSSHKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AddSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AddSSHKeyRequest:
    security: AddSSHKeySecurity = field()
    request: Optional[shared.SSHKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    ssh_key: Optional[shared.SSHKey] = field(default=None)
    add_ssh_key_default_application_json_object: Optional[AddSSHKeyDefaultApplicationJSON] = field(default=None)
    
