from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeTransferPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeTransferSecurity:
    option1: Optional[GetLinodeTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeTransferRequest:
    path_params: GetLinodeTransferPathParams = field(default=None)
    security: GetLinodeTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_linode_transfer_200_application_json_any: Optional[Any] = field(default=None)
    get_linode_transfer_default_application_json_object: Optional[GetLinodeTransferDefaultApplicationJSON] = field(default=None)
    
