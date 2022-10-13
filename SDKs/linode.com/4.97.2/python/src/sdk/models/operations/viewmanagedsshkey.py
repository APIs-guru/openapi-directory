from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ViewManagedSSHKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ViewManagedSSHKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ViewManagedSSHKeySecurity:
    option1: Optional[ViewManagedSSHKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ViewManagedSSHKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ViewManagedSSHKeyRequest:
    security: ViewManagedSSHKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ViewManagedSSHKey200ApplicationJSON:
    ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key' }})
    

@dataclass_json
@dataclass
class ViewManagedSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ViewManagedSSHKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    view_managed_ssh_key_200_application_json_object: Optional[ViewManagedSSHKey200ApplicationJSON] = field(default=None)
    view_managed_ssh_key_default_application_json_object: Optional[ViewManagedSSHKeyDefaultApplicationJSON] = field(default=None)
    
