from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddSSHKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddSSHKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddSSHKeySecurity:
    option1: Optional[AddSSHKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AddSSHKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AddSSHKeyRequest:
    request: Optional[shared.SSHKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddSSHKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AddSSHKeyResponse:
    content_type: str = field(default=None)
    ssh_key: Optional[shared.SSHKey] = field(default=None)
    status_code: int = field(default=None)
    add_ssh_key_default_application_json_object: Optional[AddSSHKeyDefaultApplicationJSON] = field(default=None)
    
