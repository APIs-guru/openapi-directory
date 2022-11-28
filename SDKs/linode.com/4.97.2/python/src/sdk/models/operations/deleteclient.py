from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteClientPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteClientRequest:
    path_params: DeleteClientPathParams = field()
    security: DeleteClientSecurity = field()
    

@dataclass
class DeleteClientResponse:
    content_type: str = field()
    status_code: int = field()
    delete_client_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_client_default_application_json_object: Optional[DeleteClientDefaultApplicationJSON] = field(default=None)
    
