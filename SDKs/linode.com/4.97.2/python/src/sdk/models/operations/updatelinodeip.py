from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLinodeIPPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateLinodeIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLinodeIPSecurity:
    option1: Optional[UpdateLinodeIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateLinodeIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateLinodeIPRequest:
    path_params: UpdateLinodeIPPathParams = field(default=None)
    request: Optional[shared.IPAddress] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLinodeIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateLinodeIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateLinodeIPResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    update_linode_ip_default_application_json_object: Optional[UpdateLinodeIPDefaultApplicationJSON] = field(default=None)
    
