from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeTransferPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeTransferRequest:
    path_params: GetLinodeTransferPathParams = field()
    security: GetLinodeTransferSecurity = field()
    

@dataclass
class GetLinodeTransferResponse:
    content_type: str = field()
    status_code: int = field()
    get_linode_transfer_200_application_json_any: Optional[Any] = field(default=None)
    get_linode_transfer_default_application_json_object: Optional[GetLinodeTransferDefaultApplicationJSON] = field(default=None)
    
