from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ViewManagedSSHKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ViewManagedSSHKey200ApplicationJSON:
    r"""ViewManagedSSHKey200ApplicationJSON
    A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
    
    """
    
    ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclass_json
@dataclass
class ViewManagedSSHKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ViewManagedSSHKeyRequest:
    security: ViewManagedSSHKeySecurity = field()
    

@dataclass
class ViewManagedSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    view_managed_ssh_key_200_application_json_object: Optional[ViewManagedSSHKey200ApplicationJSON] = field(default=None)
    view_managed_ssh_key_default_application_json_object: Optional[ViewManagedSSHKeyDefaultApplicationJSON] = field(default=None)
    
