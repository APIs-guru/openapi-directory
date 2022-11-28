from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeIPsPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeIPsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeIPsRequest:
    path_params: GetLinodeIPsPathParams = field()
    security: GetLinodeIPsSecurity = field()
    

@dataclass
class GetLinodeIPsResponse:
    content_type: str = field()
    status_code: int = field()
    get_linode_i_ps_200_application_json_any: Optional[Any] = field(default=None)
    get_linode_i_ps_default_application_json_object: Optional[GetLinodeIPsDefaultApplicationJSON] = field(default=None)
    
