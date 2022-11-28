from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLongviewClientPathParams:
    client_id: int = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLongviewClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLongviewClientRequest:
    path_params: GetLongviewClientPathParams = field()
    security: GetLongviewClientSecurity = field()
    

@dataclass
class GetLongviewClientResponse:
    content_type: str = field()
    status_code: int = field()
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    get_longview_client_default_application_json_object: Optional[GetLongviewClientDefaultApplicationJSON] = field(default=None)
    
