from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveLinodeIPPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveLinodeIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveLinodeIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveLinodeIPSecurity:
    option1: Optional[RemoveLinodeIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RemoveLinodeIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RemoveLinodeIPRequest:
    path_params: RemoveLinodeIPPathParams = field(default=None)
    security: RemoveLinodeIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RemoveLinodeIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RemoveLinodeIPResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    remove_linode_ip_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    remove_linode_ip_default_application_json_object: Optional[RemoveLinodeIPDefaultApplicationJSON] = field(default=None)
    
